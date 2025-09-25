import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { Vendor } from "../models/vendor.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import jwt from "jsonwebtoken"
import mongoose from "mongoose"

const registerVendor = asyncHandler(async (req, res) => {
    const { username, fullname, email, password, address, phoneNumber, pinCode, bio } = req.body

    if (
        [username, fullname, email, password, address, phoneNumber, pinCode, bio].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedVendor = await Vendor.findOne({
        $or: [{ username }, { phoneNumber }]
    })

    if (existedVendor) {
        throw new ApiError(409, "Vendor with username or phoneNumber already exists")
    }

    let avatarLocalPath;

    if (req.files && 
        req.files.avatar &&
        Array.isArray(req.files.avatar) &&
        req.files.avatar.length > 0
    ) {
        avatarLocalPath = req.files.avatar[0].path;
    } else {
        throw new ApiError(400, "Avatar file is required with its path")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)

    if (!avatar) {
        throw new ApiError(400, "Avatar file is required")
    }

    let coverImageLocalPath;

    if (req.files &&
        req.files.coverImage &&
        Array.isArray(req.files.coverImage) &&
        req.files.coverImage.length > 0
    ) {
        coverImageLocalPath = req.files.coverImage[0].path;
    } else {
        throw new ApiError(400, "CoverImage file is required with its path")
    }

    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if (!coverImage) {
        throw new ApiError(400, "Avatar file is required")
    }

    const vendor = await Vendor.create({
        username,
        fullname, 
        email,
        password,
        address,
        phoneNumber,
        pinCode,
        avatar: avatar?.url || "",
        coverImage: coverImage?.url || "",
        bio
    })

    const createdVendor = await Vendor.findById(vendor._id).select("-password -refreshToken")

    if (!createdVendor) {
        throw new ApiError(500, "Something went wrong while registering the vendor")
    }

    return res.status(201).json(
        new ApiResponse(200, createdVendor, "Vendor registered successfully")
    )
})

export {
    registerVendor
}