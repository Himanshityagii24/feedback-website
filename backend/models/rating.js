// models/ratingModel.js

const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    colleague: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  });
  

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;
