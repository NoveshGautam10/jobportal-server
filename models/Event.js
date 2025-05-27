// const mongoose = require('mongoose');

// const eventSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   date: Date,
//   location: String,
//   createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
// }, { timestamps: true });

// module.exports = mongoose.model('Event', eventSchema);

const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  type: String, // e.g. 'jobfair'
  title: String,
  dateRange: String,
  description: String,
  ctaText: String,
  ctaLink: String
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
