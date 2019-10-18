const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateCarReview(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.comment = !isEmpty(data.comment) ? data.comment : "";

  if (Validator.isEmpty(data.title)) {
    errors.carReviwTitle = "Въведете заглавие на ревюто";
  }

  if (Validator.isEmpty(data.comment)) {
    errors.carReviewComment = "Въведете описание за ревюто.";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
