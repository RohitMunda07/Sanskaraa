import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js";
import { Vendor } from "../models/vendor.model.js";

export const verifyJWT = asyncHandler(async(req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
    
        if (!token) {
            throw new ApiError(401, "Unauthorized request")
        }
    
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        const { userType } = decodedToken
    
        let authenticatedUser

        switch (userType) {
            case 'user':
                authenticatedUser = await User.findById(decodedToken._id).select("-password -refreshToken")
                req.user = authenticatedUser
                break;
            case 'vendor':
                authenticatedUser = await Vendor.findById(decodedToken._id).select("-password -refreshToken")
                req.vendor = authenticatedUser
                break;
            default:
                break;
        }
    
        if (!authenticatedUser) {
            throw new ApiError(401, "Invalid Access Token")
        }
        
        req.userType = userType
        next()
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid Access Token")
    }
})