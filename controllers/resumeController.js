const Resume = require('../models/Resume');

exports.uploadResume = async (req, res) => {
  const resume = new Resume({ user: req.userId, fileUrl: req.body.fileUrl });
  await resume.save();
  res.status(201).json(resume);
};

exports.getResume = async (req, res) => {
  const resume = await Resume.findOne({ user: req.userId });
  res.json(resume);
};

exports.deleteResume = async (req, res) => {
  await Resume.deleteOne({ user: req.userId });
  res.json({ message: 'Resume deleted' });
};