// const Review = require('../models/Review');

// exports.getUserReviews = async (req, res) => {
//   try {
//     const reviews = await Review.find({ user: req.user.id });
//     res.json(reviews);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch reviews' });
//   }
// };

// exports.submitReview = async (req, res) => {
//   try {
//     const { company, rating, message } = req.body;

//     if (!company || !rating || !message) {
//       return res.status(400).json({ error: 'All fields are required' });
//     }

//     const review = new Review({
//       user: req.user.id,
//       company,
//       rating,
//       message
//     });
//     await review.save();

//     res.status(201).json({ message: 'Review submitted successfully' });
//   } catch (error) {
//     console.error('Error saving review:', error);
//     res.status(500).json({ error: 'Failed to submit review' });
//   }
// };


const Review = require('../models/Review');

// Get all reviews by a specific user
exports.getUserReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ user: req.user.id });
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
};

// Submit a new review
exports.submitReview = async (req, res) => {
  try {
    const { company, rating, message } = req.body;

    // ✅ Validation check
    if (!company || !rating || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // ✅ Create and save review
    const review = new Review({
      user: req.user.id,
      company,
      rating,
      message
    });

    await review.save();

    res.status(201).json({ message: 'Review submitted successfully' });
  } catch (error) {
    console.error('Error saving review:', error); // Debug info
    res.status(500).json({ error: 'Failed to submit review' });
  }
};
