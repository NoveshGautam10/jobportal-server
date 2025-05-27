const Experience = require('../models/Experience');

exports.addExperience = async (req, res) => {

  const newExp = new Experience({ ...req.body, user: req.userId });
  await newExp.save();
  res.status(201).json(newExp);
};

exports.getExperience = async (req, res) => {
  const exp = await Experience.find({ user: req.userId });
  res.json(exp);
};

exports.updateExperience = async (req, res) => {
  const updated = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteExperience = async (req, res) => {
  await Experience.findByIdAndDelete(req.params.id);
  res.json({ message: 'Experience deleted' });
};