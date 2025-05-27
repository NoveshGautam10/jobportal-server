const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const verifyToken = require('../middleware/authMiddleware');

router.get('/', verifyToken, reviewController.getUserReviews);
router.post('/', verifyToken,  reviewController.submitReview);

module.exports = router;
