const express = require('express');
const router = express.Router();
const { addEducation, getEducation } = require('../controllers/educationController');
const  verifyToken = require('../middleware/authMiddleware');

router.post('/', verifyToken, addEducation);
router.get('/:userId', verifyToken, getEducation);

module.exports = router;
