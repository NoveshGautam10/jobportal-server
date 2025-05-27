const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    await newEvent.save();
    res.status(201).json({ message: 'Event created', event: newEvent });
  } catch (error) {
    res.status(500).json({ error: 'Server error while creating event' });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Server error while fetching events' });
  }
};

exports.getJobFair = async (req, res) => {
  try {
    const event = await Event.findOne({ type: 'jobfair' });
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch job fair data' });
  }
};
