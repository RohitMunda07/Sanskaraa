import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
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
            type: String,
            required: [true, 'Phone Number is required'],
            unique: true,
            validate: {
                validator: function(v) {
                    return /^[6-9]\d{9}$/.test(v)
                },
                message: 'Phone number must be of 10 digits'
            }
        },
        pinCode: {
            type: String,
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
        eventHistory: [
            { 
                type: Schema.Types.ObjectId,
                ref: "Event"
            }
        ],
        feedbackHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Feedback"
            }
        ]
    },
    {
        timestamps: true
    }
)

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next()
    } 

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            fullname: this.fullname,
            userType: 'user'
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function(){
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

export const User = mongoose.model("User", userSchema)