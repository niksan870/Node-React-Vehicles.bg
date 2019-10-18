const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const carBrandSchema = new Schema({
  title: {
    type: String
  },
  link: {
    type: String
  },
  logo: {
    type: String
  }
});

module.exports = carBrand = mongoose.model("carbrand", carBrandSchema);
