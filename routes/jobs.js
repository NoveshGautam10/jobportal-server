
const express = require('express');
const jobController = require('../controllers/jobController');
const router = express.Router();
const {
  postJob,
  getMyJobs,
  getJobById,
  //searchJobs,
  // getSkillBasedJobs,
  // getLatestJobs,
  // getActiveJobs


} = require('../controllers/jobController');
const verifyToken = require('../middleware/authMiddleware');

// Create a job
router.post('/', verifyToken, postJob);

// Get my jobs (based on token, not URL param)
router.get('/my', verifyToken, getMyJobs);

// Get job by jobId (for View Details page)
router.get('/:jobId', getJobById);

//router.get("/search", searchJobs);
// router.get("/search", verifyToken, searchJobs);

//console.log('typeof searchJobs:', typeof searchJobs);


// router.get('/active/:userId', getActiveJobs);
// router.get('/latest', getLatestJobs);
// router.get('/based-on-skills/:userId', getSkillBasedJobs);


module.exports = router;

// const express = require('express');
// const router = express.Router();
// const { postJob, getMyJobs } = require('../controllers/jobController');
// const verifyToken = require('../middleware/authMiddleware');

// router.post('/', verifyToken, postJob);
// router.get('/:userId', verifyToken, getMyJobs);

// module.exports = router;
