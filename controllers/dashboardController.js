// const Job = require("../models/Job");
// const Application = require("../models/Application");
// const User = require("../models/User");

// exports.getDashboardStats = async (req, res) => {
//   try {
//     const userId = req.user.userId;
//     const completedJobs = await Application.countDocuments({
//       user: userId,
//       status: "completed",
//     });

//     const totalEarnings = await Application.aggregate([
//       { $match: { user: userId, status: "completed" } },
//       { $group: { _id: null, total: { $sum: "$payment" } } }
//     ]);

//     const hoursWorked = await Application.aggregate([
//       { $match: { user: userId, status: "completed" } },
//       { $group: { _id: null, totalHours: { $sum: "$hours" } } }
//     ]);

//     res.status(200).json({
//       hoursWorked: hoursWorked[0]?.totalHours || 0,
//       totalEarnings: totalEarnings[0]?.total || 0,
//       completedJobs,
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching dashboard stats" });
//   }
// };


//const Application = require("../models/Application");

// exports.getDashboardStats = async (req, res) => {
//   try {
//     console.log("Logged in user ID:", req.user.userId);
//     const userId = req.user.userId;

//     const completedJobs = await Application.countDocuments({
//       user: userId,
//       status: "completed",
//     });

//     const totalEarnings = await Application.aggregate([
//       { $match: { user: userId, status: "completed" } },
//       { $group: { _id: null, total: { $sum: "$payment" } } }
//     ]);

//     const hoursWorked = await Application.aggregate([
//       { $match: { user: userId, status: "completed" } },
//       { $group: { _id: null, totalHours: { $sum: "$hours" } } }
//     ]);

//     res.status(200).json({
//       hoursWorked: hoursWorked[0]?.totalHours || 0,
//       totalEarnings: totalEarnings[0]?.total || 0,
//       completedJobs,
//     });
//   } catch (error) {
//     console.error("Dashboard stats error:", error);
//     res.status(500).json({ message: "Error fetching dashboard stats" });
//   }
// };


// exports.getDashboardStats = async (req, res) => {
//   try {
//     const userId = req.user.userId;
//     const completedJobs = await Application.countDocuments({
//       user: userId,
//       status: "completed",
//     });

//     const totalEarnings = await Application.aggregate([
//       { $match: { user: userId, status: "completed" } },
//       { $group: { _id: null, total: { $sum: "$payment" } } }
//     ]);

//     const hoursWorked = await Application.aggregate([
//       { $match: { user: userId, status: "completed" } },
//       { $group: { _id: null, totalHours: { $sum: "$hours" } } }
//     ]);

//     res.status(200).json({
//       hoursWorked: hoursWorked[0]?.totalHours || 0,
//       totalEarnings: totalEarnings[0]?.total || 0,
//       completedJobs,
//     });
//   } catch (error) {
//     console.error("Dashboard stats detailed error:", error);
//     res.status(500).json({ message: "Error fetching dashboard stats" });
//   }
// };


// controllers/dashboardController.js

// const Job = require('../models/Job');
// const User = require('../models/User');

// exports.getDashboardStats = async (req, res) => {
//   try {
//     // const userId = req.user.id;
//      const userId = req.user.userId;

//     const completedJobs = await Job.find({ user: userId, status: 'completed' });
//     console.log("Completed Jobs:", completedJobs);

//     const hoursWorked = completedJobs.reduce((sum, job) => sum + job.durationHours, 0);
//     const totalEarnings = completedJobs.reduce((sum, job) => sum + (job.durationHours * job.hourlyRate), 0);

//     res.json({
//       hoursWorked,
//       totalEarnings,
//       completedJobs: completedJobs.length
//     });
//   } catch (err) {
//      console.error("Dashboard Error:", err); 
//     res.status(500).json({ error: 'Dashboard stats fetch failed' });
//   }
// };


// // 6824190607d0badf8db9603e


const User = require("../models/User");
const mongoose = require("mongoose");

exports.getDashboardStats = async (req, res) => {
    // console.log("Decoded userId:", req.user.userId);
  try {
    const userId =  new mongoose.Types.ObjectId(req.user.userId);

    // User ko fetch kar rahe hain sirf required fields ke sath
    const user = await User.findById(userId).select("hoursWorked totalEarnings completedJobs");
        
    //   console.log("User found:", user);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({
      hoursWorked: user.hoursWorked || 0,
      totalEarnings: user.totalEarnings || 0,
      completedJobs: user.completedJobs || 0,
    });

  } catch (err) {
    // console.error("Dashboard Error:", err);
    res.status(500).json({ error: "Dashboard stats fetch failed" });
  }
};
