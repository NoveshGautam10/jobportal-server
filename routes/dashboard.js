// const express = require("express");
// const router = express.Router();
// const { getDashboardStats } = require("../controllers/dashboardController");
// const authMiddleware = require("../middleware/authMiddleware");

// router.get("/stats", authMiddleware, getDashboardStats);

// module.exports = router;


// routes/dashboard.js
const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const auth = require('../middleware/authMiddleware');

// router.get('/stats/:id', dashboardController.getDashboardStats);
router.get('/stats', auth, dashboardController.getDashboardStats);

module.exports = router;
