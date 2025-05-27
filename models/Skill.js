// const mongoose = require('mongoose');

// const skillSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   skills: {
//     type: [String],
//     required: true
//   }
// });

// module.exports = mongoose.model('Skill', skillSchema);



const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  skills: {
    type: [String],
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Skill', SkillSchema);
