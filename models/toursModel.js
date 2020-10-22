const mongoose = require('mongoose');

const TourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Tour Name is required'],
    unique: true
  },
  price: {
    type: Number,
    required: [true, 'Tour Price is required']
  },
  duration: {
    type: Number,
    required: true
  },
  address: {
    type: String
  },
  ratingsAverage: {
    type: Number,
    default: 5
  },
  ratingsQuantity: {
    type: Number,
    default: 0
  },
  createdDate: {
    type: Date
  }
});

const Tour = mongoose.model('Tour', TourSchema);

module.exports = Tour;
