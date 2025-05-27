const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  degree: { type: String, required: true },                // Bachelor of Technology
  university: { type: String, required: true },            // Delhi University
  sessionFrom: { type: Date, required: true },             // 20/05/2022
  sessionTo: { type: Date, required: true },               // 20/05/2025
  marks: { type: String },                                 // 589
  percentage: { type: String } 
}, { timestamps: true });

module.exports = mongoose.model('Education', educationSchema);


//  school: String,
//   degree: String,
//   fieldOfStudy: String,
//   startDate: Date,
//   endDate: Date,
//   grade: String







