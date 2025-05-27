// const User = require('../models/User');

// exports.getUserProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.userId);
//     res.json(user);
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching user profile' });
//   }
// };

// exports.updateUserProfile = async (req, res) => {
//   try {
//     const updated = await User.findByIdAndUpdate(req.userId, req.body, { new: true });
//     res.json(updated);
//   } catch (err) {
//     res.status(500).json({ message: 'Error updating user profile' });
//   }
// };






const User = require('../models/User');

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);  // ✅ param se id aa rahi
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

exports.updateUserProfile = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
     console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};


// exports.getUserStats = async (req, res) => {
//   try {
//    const userId = req.user.userId;
//      console.log("User ID:", userId);
//     const user = await User.findById(userId);
//      console.log("User found:", user);
//     if (!user) return res.status(404).json({ message: "User not found" });

//     res.json({
//       hoursWorked: user.hoursWorked,
//       totalEarnings: user.totalEarnings,
//       completedJobs: user.completedJobs,
//     });
//   } catch (err) {
//     console.error("Error:", err);
//     res.status(500).json({ message: "Failed to fetch user stats" });
//   }
// };


// exports.getUserStats = async (req, res) => {
//   try {
//     const userId = req.user.userId;
//     console.log("User ID from token:", userId);

//     const user = await User.findById(userId);
//     console.log("Fetched user from DB:", user);

//     if (!user) return res.status(404).json({ success: false, message: "User not found" });

//     res.status(200).json({
//       success: true,
//       hoursWorked: user.hoursWorked,
//       totalEarnings: user.totalEarnings,
//       completedJobs: user.completedJobs,
//     });
//   } catch (err) {
//     console.error("Error in getUserStats:", err);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };
