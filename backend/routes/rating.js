

const express = require('express');
const router = express.Router();
const Rating = require('../models/rating'); 

router.post('/', async (req, res) => {
    const ratingsData = req.body;
  
    try {
      const createdRatings = await Rating.create(ratingsData);
      res.status(201).json({
        message: 'Ratings saved successfully',
        ratings: createdRatings,
      });
    } catch (error) {
      console.error('Error saving ratings:', error);
      res.status(500).json({
        message: 'Error saving ratings',
        error: error.message,
      });
    }
  });
  
  

module.exports = router;
