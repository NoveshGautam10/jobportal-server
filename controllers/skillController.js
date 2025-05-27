// const Skill = require('../models/Skill');

// exports.addSkills = async (req, res) => {
//   const skills = req.body.skills.map(skill => ({ user: req.userId, name: skill }));
//   await Skill.insertMany(skills);
//   res.status(201).json({ message: 'Skills added' });
// };

// exports.getSkills = async (req, res) => {
//   const skills = await Skill.find({ user: req.userId });
//   res.json(skills);
// };

// exports.deleteSkill = async (req, res) => {
//   await Skill.findByIdAndDelete(req.params.id);
//   res.json({ message: 'Skill deleted' });
// };






// const Skill = require('../models/Skill');

// // Add or update skills for a user
// exports.addOrUpdateSkills = async (req, res) => {
//   const { skills } = req.body;
//   const userId = req.user.userId;

//   if (!skills || skills.length < 4) {
//     return res.status(400).json({ success: false, message: 'Select at least 4 skills' });
//   }

//   try {
//     let userSkills = await Skill.findOne({ userId });

//     if (userSkills) {
//       // Update existing skills array
//       userSkills.skills = skills;
//       await userSkills.save();
//       return res.status(200).json({ success: true, message: 'Skills updated successfully' });
//     } else {
//       // Create new skills document
//       userSkills = new Skill({ userId, skills });
//       await userSkills.save();
//       return res.status(201).json({ success: true, message: 'Skills saved successfully' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Server error' });
//   }
// };

// // Get logged-in user's skills
// exports.getSkills = async (req, res) => {
//   const userId = req.user.userId;

//   try {
//     const userSkills = await Skill.findOne({ userId });

//     if (!userSkills) {
//       return res.status(404).json({ success: false, message: 'No skills found for this user' });
//     }

//     res.status(200).json({ success: true, skills: userSkills.skills });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Server error' });
//   }
// };

// // Delete a skill from the user's skills array
// exports.deleteSkill = async (req, res) => {
//   const userId = req.user.userId;
//   const { skillName } = req.body;

//   try {
//     let userSkills = await Skill.findOne({ userId });

//     if (!userSkills) {
//       return res.status(404).json({ success: false, message: 'No skills found for this user' });
//     }

//     // Remove skill from array
//     userSkills.skills = userSkills.skills.filter(skill => skill !== skillName);
//     await userSkills.save();

//     res.status(200).json({ success: true, message: 'Skill deleted successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Server error' });
//   }
// };




const Skill = require('../models/Skill');

exports.addOrUpdateSkills = async (req, res) => {
  const userId = req.user.userId;
  const { skills } = req.body;

  if (!skills || !Array.isArray(skills) || skills.length < 4) {
    return res.status(400).json({ success: false, message: 'Select at least 4 skills' });
  }

  try {
    // Check if skills document for user exists
    let userSkills = await Skill.findOne({ userId });

    if (userSkills) {
      // Update existing skills array
      userSkills.skills = skills;
      await userSkills.save();
    } else {
      // Create new document for user
      userSkills = new Skill({ userId, skills });
      await userSkills.save();
    }

    res.status(201).json({ success: true, message: 'Skills saved successfully' });
  } catch (error) {
    console.error('Error saving skills:', error);
    res.status(500).json({ success: false, message: 'Server error while saving skills' });
  }
};

exports.getSkills = async (req, res) => {
  const userId = req.user.userId;

  try {
    const userSkills = await Skill.findOne({ userId });

    if (!userSkills) {
      return res.status(404).json({ success: false, message: 'Skills not found for this user' });
    }

    res.status(200).json({ success: true, skills: userSkills.skills });
  } catch (error) {
    console.error('Error fetching skills:', error);
    res.status(500).json({ success: false, message: 'Server error while fetching skills' });
  }
};

exports.deleteSkill = async (req, res) => {
  const userId = req.user.userId;
  const { skillName } = req.body;

  if (!skillName) {
    return res.status(400).json({ success: false, message: 'Skill name is required to delete' });
  }

  try {
    const userSkills = await Skill.findOne({ userId });
    if (!userSkills) {
      return res.status(404).json({ success: false, message: 'Skills not found for this user' });
    }

    // Filter out the skill to delete
    userSkills.skills = userSkills.skills.filter(skill => skill !== skillName);

    await userSkills.save();

    res.status(200).json({ success: true, message: 'Skill deleted successfully', skills: userSkills.skills });
  } catch (error) {
    console.error('Error deleting skill:', error);
    res.status(500).json({ success: false, message: 'Server error while deleting skill' });
  }
};
