// const mongoose = require('mongoose');

// const analyticsSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//   views: Number,
//   applications: Number,
//   savedCount: Number,
//   lastUpdated: Date,
// });

// module.exports = mongoose.model('ProfileAnalytics', analyticsSchema);


const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  views: { type: Number, default: 0 },
  applications: { type: Number, default: 0 },
  savedCount: { type: Number, default: 0 },
  lastUpdated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ProfileAnalytics', analyticsSchema);
