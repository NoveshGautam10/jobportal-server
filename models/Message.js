// const mongoose = require('mongoose');

// const messageSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//   message: String,
//   createdAt: { type: Date, default: Date.now },
//   isSupportReply: { type: Boolean, default: false },
// });

// module.exports = mongoose.model('Message', messageSchema);


const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  message: String,
  createdAt: { type: Date, default: Date.now },
  isSupportReply: { type: Boolean, default: false },
});

module.exports = mongoose.model('Message', messageSchema);
