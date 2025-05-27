const Education = require('../models/Education');

exports.addEducation = async (req, res) => {

  const newEdu = new Education({ ...req.body, user: req.userId });
  await newEdu.save();
  res.status(201).json(newEdu);
};

exports.getEducation = async (req, res) => {
  const education = await Education.find({ user: req.userId });
  res.json(education);
};

exports.updateEducation = async (req, res) => {
  const updated = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteEducation = async (req, res) => {
  await Education.findByIdAndDelete(req.params.id);
  res.json({ message: 'Education deleted' });
};