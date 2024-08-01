const mongoose = require('mongoose');

// Destructure Schema from mongoose
const {Schema} = mongoose;
// const schema = mongoose.Schema();


const reviewSchema = new Schema({
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
    comment: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  });
  
 
 const Review = mongoose.model('Review',reviewSchema);
  module.exports = Review;