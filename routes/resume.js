const express = require('express');
const router = express.Router();
const { uploadResume: uploadResumeController, getResume } = require('../controllers/resumeController');
const verifyToken = require('../middleware/authMiddleware');
const { uploadResume } = require('../middleware/uploadMiddleware'); // ✅ Correct destructure

// ✅ Now use uploadResume.single()
router.post('/', verifyToken, uploadResume.single('resume'), uploadResumeController);
router.get('/:userId', verifyToken, getResume);

module.exports = router;
