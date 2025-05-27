// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');

// // Step 1: Send OTP
// router.post('/send-otp', async (req, res) => {
//   const { phone } = req.body;
//   const otp = Math.floor(1000 + Math.random() * 9000).toString();

//   let user = await User.findOne({ phone });
//   if (!user) user = new User({ phone });

//   user.otp = otp;
//   await user.save();

//   console.log("OTP:", otp); // Use SMS API here in real app
//   res.json({ success: true, message: "OTP sent successfully" });
// });

// // Step 2: Verify OTP
// router.post('/verify-otp', async (req, res) => {
//   const { phone, otp } = req.body;

//   const user = await User.findOne({ phone });
//   if (!user || user.otp !== otp) {
//     return res.status(400).json({ success: false, message: "Invalid OTP" });
//   }

//   user.otp = null; // Clear OTP after verification
//   await user.save();

//   res.json({ success: true, message: "OTP verified", userId: user._id });
// });

// // Step 3: Select Role
// router.post('/select-role', async (req, res) => {
//   const { userId, role } = req.body;

//   const user = await User.findById(userId);
//   if (!user) return res.status(404).json({ success: false, message: "User not found" });

//   user.role = role;
//   await user.save();

//   res.json({ success: true, message: "Role selected successfully" });
// });

// module.exports = router;





// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');

// // Helper function to validate phone numbers
// const isValidPhone = (phone) => /^\d{10}$/.test(phone);

// // Step 1: Send OTP
// router.post('/send-otp', async (req, res) => {
//   const { phone } = req.body;

//   if (!isValidPhone(phone)) {
//     return res.status(400).json({ success: false, message: "Invalid phone number" });
//   }

//   const otp = Math.floor(1000 + Math.random() * 9000).toString();
//   const otpExpires = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

//   let user = await User.findOne({ phone });
//   if (!user) user = new User({ phone });

//   user.otp = otp;
//   user.otpExpires = otpExpires;
//   await user.save();

//   console.log("OTP:", otp); // TODO: Replace with SMS API in production
//   res.json({ success: true, message: "OTP sent successfully" });
// });

// // Step 2: Verify OTP
// router.post('/verify-otp', async (req, res) => {
//   const { phone, otp } = req.body;

//   if (!isValidPhone(phone) || !otp) {
//     return res.status(400).json({ success: false, message: "Phone and OTP required" });
//   }

//   const user = await User.findOne({ phone });

//   if (
//     !user ||
//     user.otp !== otp ||
//     !user.otpExpires ||
//     user.otpExpires < new Date()
//   ) {
//     return res.status(400).json({ success: false, message: "Invalid or expired OTP" });
//   }

//   user.otp = null;
//   user.otpExpires = null;
//   await user.save();

//   res.json({ success: true, message: "OTP verified", userId: user._id });
// });

// // Step 3: Select Role
// router.post('/select-role', async (req, res) => {
//   const { userId, role } = req.body;

//   const validRoles = ['job_seeker', 'employer'];
//   if (!validRoles.includes(role)) {
//     return res.status(400).json({ success: false, message: "Invalid role" });
//   }

//   const user = await User.findById(userId);
//   if (!user) {
//     return res.status(404).json({ success: false, message: "User not found" });
//   }

//   user.role = role;
//   await user.save();

//   res.json({ success: true, message: "Role selected successfully" });
// });

// module.exports = router;






const express = require('express');
const router = express.Router();
const User = require('../models/User');
const verifyToken  = require('../middleware/authMiddleware'); // ✅ ADD THIS

// Helper function to validate phone numbers
const isValidPhone = (phone) => /^\d{10}$/.test(phone);

// Step 1: Send OTP
router.post('/send-otp', async (req, res) => {
  const { phone } = req.body;

  if (!isValidPhone(phone)) {
    return res.status(400).json({ success: false, message: "Invalid phone number" });
  }

  const otp = Math.floor(1000 + Math.random() * 9000).toString();
  const otpExpires = new Date(Date.now() + 5 * 60 * 1000);

  let user = await User.findOne({ phone });
  if (!user) user = new User({ phone });

  user.otp = otp;
  user.otpExpires = otpExpires;
  await user.save();

  console.log("OTP:", otp);
  res.json({ success: true, message: "OTP sent successfully" });
});

// Step 2: Verify OTP
router.post('/verify-otp', async (req, res) => {
  const { phone, otp } = req.body;

  if (!isValidPhone(phone) || !otp) {
    return res.status(400).json({ success: false, message: "Phone and OTP required" });
  }

  const user = await User.findOne({ phone });

  if (
    !user ||
    user.otp !== otp ||
    !user.otpExpires ||
    user.otpExpires < new Date()
  ) {
    return res.status(400).json({ success: false, message: "Invalid or expired OTP" });
  }

  user.otp = null;
  user.otpExpires = null;
  await user.save();

  // ✅ Generate token (JWT)
  const jwt = require('jsonwebtoken');
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

  res.json({ success: true, message: "OTP verified", token, userId: user._id });
});

// Step 3: Select Role
// router.post('/select-role', verifyToken, async (req, res) => {
//   const { role } = req.body;
//   const userId = req.user;


//   const validRoles = ['job_seeker', 'employer'];
//   if (!validRoles.includes(role)) {
//     return res.status(400).json({ success: false, message: "Invalid role" });
//   }

//   const user = await User.findById(userId);
//   if (!user) {
//     return res.status(404).json({ success: false, message: "User not found" });
//   }

//   user.role = role;
//   await user.save();

//   res.json({ success: true, message: "Role selected successfully" });
// });


router.post('/select-role', verifyToken, async (req, res) => {
  const { role } = req.body;
  const userId = req.user.userId;  // yahan sahi se userId le rahe hain

  const validRoles = ['job_seeker', 'employer'];
  if (!validRoles.includes(role)) {
    return res.status(400).json({ success: false, message: "Invalid role" });
  }

  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  user.role = role;
  await user.save();

  res.json({ success: true, message: "Role selected successfully" });
});

// ✅ Optional: Token verification route
router.get('/check', verifyToken, (req, res) => {
  res.status(200).json({ message: 'Token verified', user: req.user });
});

module.exports = router;
