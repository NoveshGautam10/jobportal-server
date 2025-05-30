const express = require("express");
const router = express.Router();
const {
  getChatHelp,
  contactSupport,
  getAboutUs
} = require("../controllers/messageController");

// Middleware to protect routes (if needed)
const authenticate = require("../middleware/authMiddleware");

router.get("/chat", authenticate, getChatHelp);     // Chat history
router.post("/write", authenticate, contactSupport);
router.get("/write", authenticate, contactSupport); // Write to support
router.get("/about", getAboutUs);                    // About Us

module.exports = router;
