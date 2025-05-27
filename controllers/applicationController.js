const Application = require('../models/Application');

exports.applyJob = async (req, res) => {
  try {
    const { jobId } = req.body;
      
//      console.log("jobId:", jobId);
//    console.log('userId:', req.user.userId); 

    const alreadyApplied = await Application.findOne({
      job: jobId,
       applicant: req.user.userId, 
    });

    if (alreadyApplied) {
      return res.status(400).json({ error: 'Already applied to this job' });
    }

    const application = new Application({
      job: jobId,
      applicant: req.user.userId, 
    });

    await application.save();
    res.status(201).json({ message: 'Job applied successfully', application });
  } catch (error) {
     console.error("Apply error:", error); 
    res.status(500).json({ error: 'Server error while applying for job' });
  }
};
exports.getAppliedJobsByUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    const applications = await Application.find({ applicant: userId })
      .populate('job'); // will include job details

    res.json({ appliedJobs: applications });
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({ error: 'Server error while fetching applied jobs' });
  }
};
