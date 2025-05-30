// const {
//   getProfileAnalytics,
// } = require("../controllers/profileController");

// router.get("/profile/analytics", getProfileAnalytics);

const express = require('express');
const router = express.Router();

const { getProfileAnalytics } = require("../controllers/profileController");
const authenticate = require("../middleware/authMiddleware"); // Make sure you use auth middleware

router.get("/analytics", authenticate, getProfileAnalytics);
// router.post("/analytics", authenticate, getProfileAnalytics);

module.exports = router;
