const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

// Create Schema
const variationsExtendedPropertiesSchema = new Schema({
  generationId: {
    type: Schema.Types.ObjectId,
    ref: "generationsmodel"
  },
  title: {
    type: String
  },
  link: {
    type: String
  },
  header: {
    type: Array
  },
  images: {
    type: Array
  },
  data: {
    type: Array
  }
});

mongoosePaginate(variationsExtendedPropertiesSchema);

module.exports = variationsExtendedProperties = mongoose.model(
  "variationsxxtendedproperties",
  variationsExtendedPropertiesSchema
);
