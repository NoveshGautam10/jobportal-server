// const express = require('express');
// const router = express.Router();
// const Skill = require('../models/Skill');

// // ✅ POST: Save user skills
// router.post('/save', async (req, res) => {
//   try {
//     const { userId, skills } = req.body;

//     if (!userId || !skills || skills.length < 4) {
//       return res.status(400).json({ success: false, message: "Minimum 4 skills required." });
//     }

//     const existing = await Skill.findOne({ userId });

//     if (existing) {
//       existing.skills = skills;
//       await existing.save();
//     } else {
//       await Skill.create({ userId, skills });
//     }

//     res.json({ success: true, message: "Skills saved successfully." });
//   } catch (err) {
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// });

// // ✅ GET: Popular skills (optional static list)
// router.get('/popular', (req, res) => {
//   const popularSkills = [
//     "Graphic Designing", "Web Designer", "Frontend Developer",
//     "ReactJs", "NextJs", "UI/UX", "Backend Developer"
//   ];
//   res.json({ success: true, skills: popularSkills });
// });

// module.exports = router;



// const express = require('express');
// const router = express.Router();
// const Skill = require('../models/Skill');

// // Save selected skills
// router.post('/save', async (req, res) => {
//   const { userId, skills } = req.body;

//   if (!skills || skills.length < 4) {
//     return res.status(400).json({ success: false, message: "Please select at least 4 skills." });
//   }

//   try {
//     const existing = await Skill.findOne({ userId });
//     if (existing) {
//       existing.skills = skills;
//       await existing.save();
//     } else {
//       await Skill.create({ userId, skills });
//     }

//     res.status(200).json({ success: true, message: "Skills saved successfully." });
//   } catch (err) {
//     res.status(500).json({ success: false, message: "Server error." });
//   }
// });

// // Get popular skills
// router.get('/popular', (req, res) => {
//   const popularSkills = [
//     "Graphic Designing", "Web Designer", "Frontend Developer",
//     "ReactJs", "NextJs", "UI/UX", "Backend Developer"
//   ];
//   res.status(200).json({ success: true, skills: popularSkills });
// });

// module.exports = router;


// const express = require('express');
// const router = express.Router();

// router.post('/save', (req, res) => {
//   res.status(200).json({ success: true, message: 'Skill saved!' });
// });

// module.exports = router;


// routes/skill.js


// const express = require('express');
// const router = express.Router();
// const Skill = require('../models/Skill');

// router.post('/save', async (req, res) => {
//   const { userId, skills } = req.body;

//   if (!userId || !skills || skills.length < 4) {
//     return res.status(400).json({ success: false, message: 'Select at least 4 skills' });
//   }

//   try {
//     const newSkill = new Skill({ userId, skills });
//     await newSkill.save();

//     res.status(201).json({ success: true, message: 'Skills saved successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Server Error' });
//   }
// });

// // GET route to retrieve skills by userId
// router.get('/get/:userId', async (req, res) => {
//   const { userId } = req.params;

//   const isValidObjectId = mongoose.Types.ObjectId.isValid(userId);
//   if (!isValidObjectId) {
//     return res.status(400).json({ success: false, message: 'Invalid User ID format' });
//   }

//   try {
//     const skills = await Skill.findOne({ userId });
//     if (!skills) {
//       return res.status(404).json({ success: false, message: 'Skills not found for this user' });
//     }

//     res.status(200).json({ success: true, skills: skills.skills });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Server Error' });
//   }
// });


// module.exports = router;



// const express = require('express');
// const mongoose = require('mongoose');
// const router = express.Router();
// const Skill = require('../models/Skill');

// // POST route to save skills
// router.post('/save', async (req, res) => {
//   const { userId, skills } = req.body;

//   // Validate input
//   if (!userId || !skills || skills.length < 4) {
//     return res.status(400).json({ success: false, message: 'Select at least 4 skills' });
//   }

//   // Validate if userId is a valid ObjectId
//   const isValidObjectId = mongoose.Types.ObjectId.isValid(userId);
//   if (!isValidObjectId) {
//     return res.status(400).json({ success: false, message: 'Invalid User ID format' });
//   }

//   try {
//     // Create a new Skill document
//     const newSkill = new Skill({ userId, skills });
//     await newSkill.save();

//     res.status(201).json({ success: true, message: 'Skills saved successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Server Error' });
//   }
// });

// // GET route to retrieve skills by userId
// router.get('/get/:userId', async (req, res) => {
//   const { userId } = req.params;

//   // Validate userId format
//   const isValidObjectId = mongoose.Types.ObjectId.isValid(userId);
//   if (!isValidObjectId) {
//     return res.status(400).json({ success: false, message: 'Invalid User ID format' });
//   }

//   try {
//     // Find the skill entry for the given userId
//     const skills = await Skill.findOne({ userId });

//     if (!skills) {
//       return res.status(404).json({ success: false, message: 'Skills not found for this user' });
//     }

//     res.status(200).json({ success: true, skills: skills.skills });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Server Error' });
//   }
// });

// module.exports = router;


// const express = require('express');
// const mongoose = require('mongoose');
// const router = express.Router();
// const Skill = require('../models/Skill');

// // POST route to save skills
// router.post('/save', async (req, res) => {
//   const { userId, skills } = req.body;

//   // Check if userId and skills are provided, and if at least 4 skills are selected
//   if (!userId || !skills || skills.length < 4) {
//     return res.status(400).json({ success: false, message: 'Select at least 4 skills' });
//   }

//   try {
//     const newSkill = new Skill({ userId, skills });
//     await newSkill.save();
//     res.status(201).json({ success: true, message: 'Skills saved successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Server Error' });
//   }
// });

// // GET route to retrieve skills by userId
// router.get('/get/:userId', async (req, res) => {
//   const { userId } = req.params;

//   // Validate if the provided userId is a valid ObjectId
//   const isValidObjectId = mongoose.Types.ObjectId.isValid(userId);
//   if (!isValidObjectId) {
//     return res.status(400).json({ success: false, message: 'Invalid User ID format' });
//   }

//   try {
//     // Search for the userId in the skills collection
//     const skills = await Skill.findOne({ userId });
//     if (!skills) {
//       return res.status(404).json({ success: false, message: 'Skills not found for this user' });
//     }

//     res.status(200).json({ success: true, skills: skills.skills });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Server Error' });
//   }
// });

// module.exports = router;










// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');
// const Skill = require('../models/Skill');
// const  verifyToken = require('../middleware/authMiddleware');

// // POST /api/skills/
// router.post('/', verifyToken, async (req, res) => {
//   const { skills } = req.body;
//   const userId = req.user.userId;

//   if (!skills || skills.length < 4) {
//     return res.status(400).json({ success: false, message: 'Select at least 4 skills' });
//   }

//   try {
//     const newSkill = new Skill({ userId, skills });
//     await newSkill.save();
//     res.status(201).json({ success: true, message: 'Skills saved successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Server Error' });
//   }
// });

// // GET /api/skills/:userId
// router.get('/:userId', verifyToken, async (req, res) => {
//   const { userId } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(userId)) {
//     return res.status(400).json({ success: false, message: 'Invalid User ID format' });
//   }

//   try {
//     const skills = await Skill.findOne({ userId });
//     if (!skills) {
//       return res.status(404).json({ success: false, message: 'Skills not found for this user' });
//     }

//     res.status(200).json({ success: true, skills: skills.skills });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Server Error' });
//   }
// });

// module.exports = router;





const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const skillController = require('../controllers/skillController');

// POST /api/skills/ — add ya update skills
router.post('/', verifyToken, skillController.addOrUpdateSkills);



// GET /api/skills/ — logged-in user ki skills laane ke liye
router.get('/', verifyToken, skillController.getSkills);

// DELETE /api/skills/ — skill delete karne ke liye (body me skillName bhejna)
router.delete('/', verifyToken, skillController.deleteSkill);

module.exports = router;
