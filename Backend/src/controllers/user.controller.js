import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js"
import { ApiResponse } from "../utils/apiResponse.js"
import { User } from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const registerUser = asyncHandler( async(req, res) => {

    const { fullname, email, password, address, phoneNumber, pinCode } = req.body

    if (
        [fullname, email, password, address, phoneNumber, pinCode].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await User.findOne({
        $or: [{ email }, { phoneNumber }]
    })

    if (existedUser) {
        throw new ApiError(409, "User with email or phoneNumber already exists")
    }

    const avatarLocalPath = req.files?.avatar[0]?.path

    const avatar = await uploadOnCloudinary(avatarLocalPath)

    if (!avatar) {
        throw new ApiError(400, "Avatar file is required")
    }

    const user = await User.create({
        fullname,
        email,
        password,
        address,
        phoneNumber,
        pinCode,
        avatar: avatar?.url || ""
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered successfully")
    )
})

export {
    registerUser
}  