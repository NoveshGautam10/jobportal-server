const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  company: String,
  rating: Number,
  message: String
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);
