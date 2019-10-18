const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  overAllRating: {
    type: String,
    required: true
  },
  safety: {
    type: String,
    required: true
  },
  price: {
    type: String
  },
  reliability: {
    type: String
  },
  performance: {
    type: String
  },
  technology: {
    type: String
  },
  comfort: {
    type: String
  },
  interior: {
    type: String
  },
  profileFirstName: {
    type: String
  },
  profileLastName: {
    type: String
  },
  profileHandle: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Reviews = mongoose.model("reviews", ReviewsSchema);
