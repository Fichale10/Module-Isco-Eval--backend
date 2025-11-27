const router = require("express").Router();
const authCtrl = require("../controllers/authController");

// Auth de base
router.post("/register", authCtrl.register);
router.post("/login", authCtrl.login);

// OTP
router.post("/forgot-password", authCtrl.sendOtp);
router.post("/verify-otp", authCtrl.verifyOtp);
router.post("/reset-password", authCtrl.resetPassword);

module.exports = router;
