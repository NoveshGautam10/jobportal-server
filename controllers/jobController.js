// // controllers/jobController.js

// const Job = require('../models/Job');

// exports.postJob = async (req, res) => {
//   try {
//     const { title, description, location } = req.body;

//     const job = new Job({
//       user: req.userId,  // assume verifyToken sets req.userId
//       title,
//       description,
//       location,
//     });

//     await job.save();
//     res.status(201).json({ message: 'Job posted successfully', job });
//   } catch (error) {
//     res.status(500).json({ error: 'Server error while posting job' });
//   }
// };

// exports.getMyJobs = async (req, res) => {
//   try {
//     const jobs = await Job.find({ user: req.userId });
//     res.json(jobs);
//   } catch (error) {
//     res.status(500).json({ error: 'Server error while fetching jobs' });
//   }
// };

console.log("jobRoutes file loaded");

const Job = require('../models/Job');
const User = require('../models/User');
// POST a job
exports.postJob = async (req, res) => {
  try {
    const {
      title, description, location, company,
      salaryRange, skills, experience, payRate,
      shift, jobType, industry
    } = req.body;

    const job = new Job({
      postedBy: req.userId,
      title,
      description,
      location,
      company,
      salaryRange,
      skills,
      experience,
      payRate,
      shift,
      jobType,
      industry,
       status: 'active' 
    });

    await job.save();
    res.status(201).json({ message: 'Job posted successfully', job });
  } catch (error) {
    res.status(500).json({ error: 'Server error while posting job' });
  }
};

// GET my posted jobs
exports.getMyJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ postedBy: req.userId });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Server error while fetching jobs' });
  }
};

// GET single job by jobId
exports.getJobById = async (req, res) => {
  try {
    const jobs = await Job.findById(req.params.jobId).populate('postedBy', 'name email');
    if (!jobs) return res.status(404).json({ error: 'Job not found' });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Server error while fetching job detail' });
  }
};

exports.searchJobs = async (req, res) => {
  const {
    industry,
    title,
    location,
    salaryType,
    experience,
    jobType,
    shift
  } = req.query;

  const filter = {};

  if (industry) filter.industry = industry;
  if (title) filter.title = { $regex: title, $options: "i" };
  if (location) filter.location = { $regex: location, $options: "i" };
  if (salaryType) filter.salaryType = salaryType;
  if (experience) filter.experience = { $lte: experience }; // Max required exp
  if (jobType) filter.jobType = jobType;
  if (shift) filter.shift = shift;

  try {
    const jobs = await Job.find(filter);
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch jobs", error: err.message });
  }
};


// exports.getActiveJobs = async (req, res) => {
//   try {
//     const jobs = await Job.find({ status: 'active' });
//     res.json(jobs);
//   } catch (error) {
//      console.error("Error in getJobById:", error);
//     res.status(500).json({ error: 'Failed to fetch active jobs' });
//   }
// };
// console.log("Inside getXYZ")
// exports.getActiveJobs = async (req, res) => {
//    console.log("Inside getActiveJobs");
//   try {
//     const jobs = await Job.find({ status: 'active' });
    
//     res.json(jobs);
//   } catch (error) {
//    console.error(error);
//     res.status(500).json({ error: 'Failed to fetch active jobs' });
//   }
// };


// console.log("Inside getXYZ")
// exports.getLatestJobs = async (req, res) => {
//    console.log("🔥 Inside getActiveJobs API");
//   try {
//     const jobs = await Job.find().sort({ createdAt: -1 }).limit(10);
//     res.json(jobs);
//   } catch (error) {
//    console.error(error);
//     res.status(500).json({ error: 'Failed to fetch latest jobs' });
//   }
// };

// console.log("Inside getXYZ")
// exports.getSkillBasedJobs = async (req, res) => {
//    console.log("🔥 Inside getActiveJobs API");
//   try {
//     const user = await User.findById(req.userId);
//     const jobs = await Job.find({ skills: { $in: user.skills } });
//     res.json(jobs);
//   } catch (error) {
//      console.error(error);
//     res.status(500).json({ error: 'Failed to fetch skill-based jobs' });
//   }
// };



// exports.getActiveJobs = async (req, res) => {
//   try {
//     const activeJobs = await Job.find({ status: 'active' }).limit(20);
//     res.json(activeJobs);
//   } catch (err) {
//     res.status(500).json({ error: 'Active jobs fetch failed' });
//   }
// };

// exports.getLatestJobs = async (req, res) => {
//   try {
//     const latestJobs = await Job.find().sort({ createdAt: -1 }).limit(28);
//     res.json(latestJobs);
//   } catch (err) {
//     res.status(500).json({ error: 'Latest jobs fetch failed' });
//   }
// };

// exports.getJobsByUserSkills = async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id);
//     const skillSet = user.skills || [];

//     const jobs = await Job.find({ skills: { $in: skillSet } }).limit(28);
//     res.json(jobs);
//   } catch (err) {
//     res.status(500).json({ error: 'Skill-based jobs fetch failed' });
//   }
// };