const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  description: String,
  date: String, // format: 'YYYY-MM-DD'
  status: { type: String, enum: ['PENDING', 'IN_PROGRESS', 'COMPLETED', 'REVIEWED'], default: 'PENDING' },
  remarks: String,
  submittedAt: Date,
  progress: Number, // optional: 0 to 100
});

module.exports = mongoose.model('Task', taskSchema);
