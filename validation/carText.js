const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.made = !isEmpty(data.made) ? data.made : "";
  data.model = !isEmpty(data.model) ? data.model : "";
  data.modification = !isEmpty(data.modification) ? data.modification : "";
  data.typeOfEngine = !isEmpty(data.typeOfEngine) ? data.typeOfEngine : "";
  data.euroStandart = !isEmpty(data.euroStandart) ? data.euroStandart : "";
  data.condition = !isEmpty(data.condition) ? data.condition : "";
  data.typeOfGear = !isEmpty(data.typeOfGear) ? data.typeOfGear : "";
  data.price = !isEmpty(data.price) ? data.price : "";
  data.category = !isEmpty(data.category) ? data.category : "";
  data.currency = !isEmpty(data.currency) ? data.currency : "";
  data.realeaseDateMonth = !isEmpty(data.realeaseDateMonth)
    ? data.realeaseDateMonth
    : "";
  data.realeaseDateYear = !isEmpty(data.realeaseDateYear)
    ? data.realeaseDateYear
    : "";
  data.runningKMH = !isEmpty(data.runningKMH) ? data.runningKMH : "";
  data.colours = !isEmpty(data.colours) ? data.colours : "";
  data.region = !isEmpty(data.region) ? data.region : "";
  data.horsePower = !isEmpty(data.horsePower) ? data.horsePower : "";
  data.populatedPlace = !isEmpty(data.populatedPlace)
    ? data.populatedPlace
    : "";

  if (Validator.isEmpty(data.made)) {
    errors.made = "Въведете марка на автомобила.";
  }

  if (Validator.isEmpty(data.model)) {
    errors.model = "Въведете модел на автомобила.";
  }

  if (Validator.isEmpty(data.condition)) {
    errors.condition = "Въведете състояние на автомобила.";
  }

  if (Validator.isEmpty(data.typeOfGear)) {
    errors.typeOfGear = "Въведете скоростната кутия на автомобила.";
  }

  if (Validator.isEmpty(data.category)) {
    errors.category = "Въведете категорията на автомобила.";
  }

  if (Validator.isEmpty(data.price)) {
    errors.price = "Въведете цената на автомобила.";
  }

  if (Validator.isEmpty(data.realeaseDateMonth)) {
    errors.realeaseDateMonth = "Въведете месеца на произвеждане на автомобила.";
  }

  if (Validator.isEmpty(data.realeaseDateYear)) {
    errors.realeaseDateYear =
      "Въведете годината на произвеждане на автомобила.";
  }

  if (Validator.isEmpty(data.runningKMH)) {
    errors.runningKMH = "Въведете пробега на автомобила.";
  }

  if (Validator.isEmpty(data.price)) {
    errors.price = "Въведете валута.";
  }

  if (Validator.isEmpty(data.region)) {
    errors.region = "Въведете региона.";
  }

  if (Validator.isEmpty(data.region)) {
    errors.region = "Въведете региона.";
  }

  if (Validator.isEmpty(data.populatedPlace)) {
    errors.populatedPlace = "Въведете населеното място.";
  }

  if (Validator.isEmpty(data.currency)) {
    errors.currency = "Въведете валута.";
  }

  if (Validator.isEmpty(data.typeOfEngine)) {
    errors.typeOfEngine = "Въведете тип на двигателя.";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
