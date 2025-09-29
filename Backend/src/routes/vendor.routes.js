import {
    registerVendor,
    loginVendor,
    logoutVendor,
} from "../controllers/vendor.controller.js"
import { Router } from "express"
import { upload } from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js"

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerVendor
)

router.route("/login").post(
    loginVendor
)

router.route("/logout").post(
    verifyJWT,
    logoutVendor
)

export default router