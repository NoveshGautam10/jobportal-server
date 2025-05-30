const Setting = require("../models/Setting");

exports.getSettings = async (req, res) => {
  try {
    const setting = await Setting.findOne({ userId: req.user._id });
    if (!setting) return res.status(404).json({ message: "Settings not found" });
    res.json(setting);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch settings" });
  }
};

exports.updateSettings = async (req, res) => {
  try {
    const { notification, darkMode } = req.body;
    const setting = await Setting.findOneAndUpdate(
      { userId: req.user._id },
      { notification, darkMode },
      { new: true, upsert: true } // agar settings na mile to naya create karo
    );
    res.json(setting);
  } catch (err) {
    res.status(500).json({ error: "Failed to update settings" });
  }
};
