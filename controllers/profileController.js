// controllers/profileController.js
// exports.getProfileAnalytics = (req, res) => {
//   // fetch profile views, performance etc
//   res.send("Profile analytics data");
// };



const ProfileAnalytics = require('../models/ProfileAnalytics');
exports.getProfileAnalytics = async (req, res) => {
  try {
    let analytics = await ProfileAnalytics.findOne({ userId: req.user._id });

    if (!analytics) {
      // Auto-create analytics record if not found
      analytics = await ProfileAnalytics.create({
        userId: req.user._id,
        views: 0,
        applications: 0,
        savedCount: 0,
        lastUpdated: new Date()
      });
    }

    res.status(200).json(analytics);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
