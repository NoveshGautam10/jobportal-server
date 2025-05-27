// const mongoose = require('mongoose');

// const applicationSchema = new mongoose.Schema({
//   jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//   status: { type: String, enum: ['applied', 'reviewed', 'rejected', 'accepted'], default: 'applied' }
// }, { timestamps: true });

// module.exports = mongoose.model('Application', applicationSchema);

const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  resumeUrl: String, // optional
  status: { type: String, enum: ['applied', 'reviewed', 'rejected', 'accepted'], default: 'applied' } // 'Applied', 'Shortlisted', 'Rejected', etc.
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema);
