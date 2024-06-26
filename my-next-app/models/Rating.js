import mongoose from 'mongoose';

const RatingSchema = new mongoose.Schema({
  colleagueId: {
    type: String,
    required: true,
   
  },
  rating: {
    type: Number,
    required: true,
  },
});

// Check if the model already exists to prevent redefining
const Rating = mongoose.models.Rating || mongoose.model('Rating', RatingSchema);

export default Rating;
