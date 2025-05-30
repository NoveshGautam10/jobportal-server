const express = require("express");
const router = express.Router();
const {
  getSettings,
  updateSettings
} = require("../controllers/settingsController");

// Authentication middleware (agar bana hua hai)
const authenticate = require("../middleware/authMiddleware");

router.get("/settings", authenticate, getSettings);
router.put("/settings", authenticate, updateSettings);

module.exports = router;
