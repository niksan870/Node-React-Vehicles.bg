const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const Schema = mongoose.Schema;

// Create Schema
const CarsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  made: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  handle: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  modification: {
    type: String
  },
  typeOfEngine: {
    type: String,
    required: true
  },
  euroStandart: {
    type: String
  },
  horsePower: {
    type: String
  },
  condition: {
    type: String,
    required: true
  },
  typeOfGear: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  currency: {
    type: String,
    required: true
  },
  realeaseDateMonth: {
    type: String,
    required: true
  },
  realeaseDateYear: {
    type: String,
    required: true
  },
  runningKMH: {
    type: Number,
    required: true
  },
  region: {
    type: String,
    required: true
  },
  safety: {
    type: Array
  },
  comfort: {
    type: Array
  },
  another: {
    type: Array
  },
  protection: {
    type: Array
  },
  interior: {
    type: Array
  },
  specialized: {
    type: Array
  },
  exterior: {
    type: Array
  },
  populatedPlace: {
    type: String,
    required: true
  },
  step: {
    type: Number,
    required: true
  },
  images: [{ data: Buffer, contentType: String }],
  date: {
    type: Date,
    default: Date.now
  }
});
CarsSchema.plugin(mongoosePaginate);

module.exports = Cars = mongoose.model("cars", CarsSchema);
