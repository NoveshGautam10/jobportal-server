const mongoose = require('mongoose');

const settingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  notification: { type: Boolean, default: true },
  darkMode: { type: Boolean, default: false },
});

module.exports = mongoose.model('Setting', settingSchema);
