const express = require('express');
const router = express.Router();
const { applyJob, getAppliedJobsByUser } = require('../controllers/applicationController');
const verifyToken = require('../middleware/authMiddleware');

router.post('/apply', verifyToken, applyJob);
router.get('/:userId', getAppliedJobsByUser);

module.exports = router;
