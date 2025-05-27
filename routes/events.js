// const express = require('express');
// const router = express.Router();
// const { createEvent, getEvents } = require('../controllers/eventController');
// const  verifyToken = require('../middleware/authMiddleware');

// console.log('createEvent:', createEvent, 'getEvents:', getEvents);

// router.post('/', verifyToken, createEvent);
// router.get('/', getEvents);

// module.exports = router;


const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const { createEvent, getEvents } = require('../controllers/eventController');
 const  verifyToken = require('../middleware/authMiddleware');

 console.log('createEvent:', createEvent, 'getEvents:', getEvents);


router.get('/jobfair', eventController.getJobFair);
router.post('/', verifyToken, createEvent);
 router.get('/', getEvents);
module.exports = router;
