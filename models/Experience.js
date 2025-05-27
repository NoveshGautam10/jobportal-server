const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

   companyName: { type: String, required: true },      // Krash IT Solutions
  jobTitle: { type: String, required: true },         // Web Designer

  sessionFrom: { type: Date, required: true },        // 20/05/2022
  sessionTo: { type: Date, required: true },          // 20/05/2025

  roleDescription: { type: String }  
  
}, { timestamps: true });

module.exports = mongoose.model('Experience', experienceSchema);



// company: String,
//   role: String,
//   startDate: Date,
//   endDate: Date,
//   description: String