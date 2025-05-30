const Message = require("../models/Message");

exports.getChatHelp = async (req, res) => {
  try {
    const messages = await Message.find({ userId: req.user._id }).sort({ createdAt: 1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch chat history" });
  }
};

exports.contactSupport = async (req, res) => {
  const { message } = req.body;
  try {
    const newMessage = new Message({
      userId: req.user._id,
      message,
      isSupportReply: false,
    });
    await newMessage.save();
    res.status(201).json({ success: true, message: "Support message received" });
  } catch (err) {
    res.status(500).json({ error: "Failed to send message" });
  }
};

exports.getAboutUs = (req, res) => {
  res.send("We are a team committed to helping users with their job search and career needs.");
};
