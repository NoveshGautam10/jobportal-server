// const mongoose = require('mongoose');

// const jobSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   location: String,
//   company: String,
//   postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//   deadline: Date
// }, { timestamps: true });

// module.exports = mongoose.model('Job', jobSchema);


const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  location: [String],
  company: String,
  salaryRange: String,
  experience: String,
  payRate: String,
  shift: String,
  jobType: String,
  industry: String,
  skills: [String],
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
 status: {
    type: String,
    enum: ['active', 'completed', 'closed'],
    default: 'active'
  },
  deadline: Date
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);
