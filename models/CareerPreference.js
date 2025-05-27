const mongoose = require('mongoose');

const CareerPreferenceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  preferredLocation: String,
  jobRole: String,
  jobType: { type: String, enum: ['hourly', 'monthly'] },
  currentSalaryType: { type: String, enum: ['hourly', 'monthly'] },
  negotiable: Boolean,
  highestEducation: String,
  totalExperience: String,
  category: String,
  noticePeriod: String
}, { timestamps: true });

module.exports = mongoose.model('CareerPreference', CareerPreferenceSchema);
