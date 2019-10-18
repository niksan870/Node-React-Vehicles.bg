const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};
  const legitDate = /^([1-9]|[12]\d|3[01])\/(Janaury|February|March|April|May|June|July|August|September|October|November|December)\/(19|20)\d{2}$/;

  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.age = !isEmpty(data.age) ? data.age : "";

  if (Validator.isEmpty(data.age)) {
    errors.age = "Age field is required";
  }

  if (!legitDate.test(data.age)) {
    errors.age = "Not valid age format";
  }

  if (Validator.isMobilePhone(data.phoneNumber)) {
    errors.number = "Not a valid phone number";
  }

  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = "Not a valid URL";
    }
  }

  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = "Not a valid URL";
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = "Not a valid URL";
    }
  }

  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = "Not a valid URL";
    }
  }

  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = "Not a valid URL";
    }
  }

  console.log(errors);
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
