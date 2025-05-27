// const mongoose = require('mongoose');

// const attendanceSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//   date: Date,
//   status: { type: String, enum: ['present', 'absent', 'late'], default: 'present' }
// }, { timestamps: true });

// module.exports = mongoose.model('Attendance', attendanceSchema);


const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  clockInTime: {
    type: Date,
    required: true,
  },
  clockOutTime: {
    type: Date,
  },
  note: {
    type: String,
  },
  type: {
    type: String,
    enum: ['auto', 'manual'],
    default: 'auto',
  }
}, { timestamps: true });

module.exports = mongoose.model('Attendance', attendanceSchema);
