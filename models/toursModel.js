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
  }
});

const Tour = mongoose.model('Tour', TourSchema);

export default Tour;
