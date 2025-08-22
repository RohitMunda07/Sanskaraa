import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const vendorSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, "Username is required"],
            unique: true,
            index: true,
            trim: true,
            lowercase: true
        },
        fullname: {
            type: String,
            required: [true, 'Fullname is required'],
            index: true,
            trim: true
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            trim: true
        },
        address: {
            type: String,
            required: [true, 'Address is required'],
            trim: true
        },
        phoneNumber: {
            type: Number,
            required: true,
            unique: true,
            validate: {
                validator: function(v) {
                    return /^[6-9]\d{9}$/.test(v)
                },
                message: 'Phone number must be of 10 digits'
            }
        },
        pinCode: {
            type: Number,
            required: [true, 'Pin Code is required'],
            minLength: 6,
            maxLength: 6,
            trim: true
        },
        avatar: {
            type: String
        },
        refreshToken: {
            type: String
        },
        orderHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Order"
            }
        ],
        coverImage: {
            type: String
        },
        feedbackHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Feedback"
            }
        ],
        isVerified: {
            type: Boolean,
            default: false,
            index: true
        },
        bio: {
            type: String,
            minLength: 10,
            maxLength: 200
        }
    },
    {
        timestamps: true
    }
)

vendorSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next()
    }

    this.password = await bcrypt.hash(this.password, 10) 
        next()
    
})

vendorSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

vendorSchema.methods.generateAccessToken = function() {
    return jwt.sign(
        {
            _id: this._id,
            password: this.password,
            username: this.username,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: ACCESS_TOKEN_EXPIRY
        }
    )
}

vendorSchema.methods.generateRefreshToken = function() {
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: REFRESH_TOKEN_EXPIRY
        }
    )
}

vendorSchema.plugin(mongooseAggregatePaginate)

export const Vendor = mongoose.model("Vendor", vendorSchema)