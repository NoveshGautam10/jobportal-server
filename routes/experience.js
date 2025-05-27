const express = require('express');
const router = express.Router();
const { addExperience, getExperience } = require('../controllers/experienceController');
const  verifyToken = require('../middleware/authMiddleware');

router.post('/', verifyToken, addExperience);
router.get('/:userId', verifyToken, getExperience);

module.exports = router;