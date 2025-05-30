// routes/sidebarRoutes.js

const express = require("express");
const router = express.Router();

const {
  searchJobs,
  getRecommendedJobs,
  getSavedJobs,
} = require("../controllers/jobController");

const {
  getProfileAnalytics,
} = require("../controllers/profileController");

const {
  getSettings,
  updateSettings,
} = require("../controllers/settingsController");

// const {
//   chatForHelp,
//   writeToUs,
//   getAboutUsInfo,
// } = require("../controllers/supportController");

// Jobs
router.get("/jobs/search", searchJobs);
router.get("/jobs/recommended", getRecommendedJobs);
router.get("/jobs/saved", getSavedJobs);

// Profile
router.get("/profile/analytics", getProfileAnalytics);

// Settings
router.get("/settings", getSettings);
router.put("/settings", updateSettings);

// Support
// router.post("/support/chat", chatForHelp);
// router.post("/support/write", writeToUs);
// router.get("/support/about", getAboutUsInfo);

module.exports = router;
