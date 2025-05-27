// const express = require('express');
// const router = express.Router();
// const { markAttendance, getAttendance } = require('../controllers/attendanceController');
// const verifyToken = require('../middleware/authMiddleware');


// console.log(markAttendance, getAttendance); 
// router.post('/', verifyToken, markAttendance);
// router.get('/:userId', verifyToken, getAttendance);

// module.exports = router;


const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

router.post('/clock-in', attendanceController.clockIn);             // POST /attendance/clock-in
router.get('/history', attendanceController.getHistory);           // GET  /attendance/history?userId=...
router.post('/manual', attendanceController.manualEntry);          // POST /attendance/manual
router.put('/update/:id', attendanceController.updateEntry);       // PUT  /attendance/update/:id

module.exports = router;
