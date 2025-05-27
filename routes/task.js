// routes/task.js
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// routes/task.js

router.get('/', taskController.getTasks);
router.post('/submit', taskController.submitTask);
router.put('/progress', taskController.updateProgress);
router.get('/status-legend', taskController.getStatusLegend);

module.exports = router;
