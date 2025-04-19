const express = require("express");
const router = express.Router();
const upload = require("../utils/fileUpload")
const authController = require("../controllers/authController")


router.post("/signup", upload.single("profilePicture"), authController.signup_post);
router.post("/login", authController.login_post);
router.get("/refresh-token", authController.refreshTokenFunc)
router.get("/logout", authController.logout)
router.get("/whoami", authController.whoami)

module.exports = router;
