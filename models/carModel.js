const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

// Create Schema
const carModelSchema = new Schema({
  brand: {
    type: Schema.Types.ObjectId,
    ref: "carbrand"
  },
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
mongoosePaginate(carModelSchema);

module.exports = carModel = mongoose.model("carmodel", carModelSchema);
