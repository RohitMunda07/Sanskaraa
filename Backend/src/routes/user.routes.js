import { 
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    updateAccount,
    updateAvatar,
    getOrderHistory
 } from "../controllers/user.controller.js"
import { Router } from 'express'
import { upload } from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js"

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }
    ]),
    registerUser
)

router.route("/login").post(
    loginUser
)

router.route("/logout").post(
    verifyJWT,
    logoutUser
)

router.route("/refresh-token").get(
    refreshAccessToken
)

router.route("/change-password").patch(
    verifyJWT,
    changeCurrentPassword
)

router.route("/current-user").get(
    verifyJWT,
    getCurrentUser
)

router.route("/update-account").patch(
    verifyJWT,
    updateAccount
)

router.route("/update-avatar").patch(
    verifyJWT,
    upload.single("avatar"),
    updateAvatar
)

router.route("/history").get(
    verifyJWT,
    getOrderHistory
)

export default router