const express = require("express");
const router = express.Router();
const upload = require("../utils/fileUpload")
const authController = require("../controllers/authController")


router.post("/signup", upload.single("profilePic"), authController.signup_post);
router.post("/login", authController.login_post);

module.exports = router;
