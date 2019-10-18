const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

// Create Schema
const generationsModelSchema = new Schema({
  carModel: {
    type: Schema.Types.ObjectId,
    ref: "carmodel"
  },
  modification: [
    {
      type: Array
    }
  ],
  generations: [
    {
      type: Array
    }
  ]
});
mongoosePaginate(generationsModelSchema);

module.exports = generationsModel = mongoose.model(
  "generationsmodel",
  generationsModelSchema
);
