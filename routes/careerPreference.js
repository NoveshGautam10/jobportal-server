const express = require('express');
const router = express.Router();
const CareerPreference = require('../models/CareerPreference');

// POST: Create or Update Career Preference
router.post('/:userId', async (req, res) => {
  try {
    const updated = await CareerPreference.findOneAndUpdate(
      { userId: req.params.userId },
      { ...req.body, userId: req.params.userId },
      { upsert: true, new: true }
    );
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err });
  }
});

// GET: Fetch Career Preference by userId
router.get('/:userId', async (req, res) => {
  try {
    const data = await CareerPreference.findOne({ userId: req.params.userId });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err });
  }
});

module.exports = router;
