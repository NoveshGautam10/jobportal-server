// const mongoose = require('mongoose');

// const categorySchema = new mongoose.Schema({
//   name: String,
//   newJobs: Number
// }, { timestamps: true });

// module.exports = mongoose.model('Category', categorySchema);


const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  jobCount: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('Category', categorySchema);
