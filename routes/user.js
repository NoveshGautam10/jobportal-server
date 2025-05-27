const express = require('express');
const router = express.Router();
const { updateUserProfile, getUserProfile } = require('../controllers/userController');
const verifyToken = require('../middleware/authMiddleware');
// const { getUserStats } = require("../controllers/userController");
//const authMiddleware = require("../middleware/authMiddleware");

router.get('/:id', verifyToken, getUserProfile);
router.put('/:id', verifyToken, updateUserProfile);
// router.get("/stats", verifyToken, getUserStats);

module.exports = router;
