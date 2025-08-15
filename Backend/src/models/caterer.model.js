import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const catererSchema = new Schema(
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
        eventHistory: [
            { 
                type: Schema.Types.ObjectId,
                ref: "Event"
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
        speciality: {
            type: Array
        },
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

catererSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next()
    }

    this.password = bcrypt.hash(this.password, 10)
        next()
})

catererSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

catererSchema.methods.generateAccessToken = function() {
    return jwt.sign(
        {
            _id: this._id,
            password: this.password,
            username: this.username,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

catererSchema.methods.generateRefreshToken = function() {
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

catererSchema.plugin(mongooseAggregatePaginate)

export const Caterer = mongoose.model("Caterer", catererSchema)