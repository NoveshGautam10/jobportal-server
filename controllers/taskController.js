const Task = require('../models/Task');
const moment = require('moment');

exports.getTasks = async (req, res) => {
  try {
    const { userId, filter } = req.query;
    let query = { userId };

    if (filter === 'today') {
      const today = moment().format('YYYY-MM-DD');
      query.date = today;
    }

    const tasks = await Task.find(query);
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.submitTask = async (req, res) => {
  try {
    const { userId, taskId, status, remarks } = req.body;
    const task = await Task.findOne({ _id: taskId, userId });

    if (!task) return res.status(404).json({ message: 'Task not found' });

    task.status = status;
    task.remarks = remarks;
    task.submittedAt = new Date();

    await task.save();
    res.json({ message: 'Task submitted successfully.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProgress = async (req, res) => {
  try {
    const { taskId, progress } = req.body;
    const task = await Task.findById(taskId);

    if (!task) return res.status(404).json({ message: 'Task not found' });

    task.progress = progress;
    await task.save();

    res.json({ message: 'Progress updated.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getStatusLegend = (req, res) => {
  res.json({
    PENDING: 'Task assigned but not started',
    IN_PROGRESS: 'Work is ongoing',
    COMPLETED: 'Task done',
    REVIEWED: 'Checked by admin',
  });
};
