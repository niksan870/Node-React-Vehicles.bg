const config = require("config.json");
const jwt = require("jsonwebtoken");
const Role = require("_helpers/role");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");

//Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

//Load User Model
const User = require("../../models/User");

module.exports = {
  authenticate,
  registrate,
  getAll,
  getById
};

// @route GET api/users/login
// @desc Login User / Routing JWT Token
// @access Public
async function authenticate(reqBody) {
  try {
    const { errors, isValid } = validateLoginInput(reqBody);

    if (!isValid) {
      throw errors;
    }

    const { email, password } = reqBody;
    const user = await User.findOne({ email });

    if (!user) {
      errors.email = "User not found";
      throw errors;
    }

    const { id, name, avatar } = user;
    const result = await bcrypt.compare(password, user.password);

    if (result) {
      //User Matched
      const payload = { id, name, avatar, role: user.role }; //Create jwt payload

      const token = jwt.sign(payload, config.secret, {
        expiresIn: 3600
      });

      return {
        success: true,
        token: "Bearer " + token
      };
    } else {
      errors.password = "Password is incorrect";
      throw errors;
    }
  } catch (e) {
    throw e;
  }
}

async function getAll() {
  return users.map(u => {
    const { password, ...userWithoutPassword } = u;
    return userWithoutPassword;
  });
}

async function getById(id) {
  const user = users.find(u => u.id === parseInt(id));
  if (!user) return;
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

async function registrate(reqBody) {
  const { errors, isValid } = validateRegisterInput(reqBody);
  const { name, email, password } = reqBody;

  //Check Validation
  if (await !isValid) {
    throw errors;
  }

  if (await User.findOne({ email })) {
    errors.email = "Email already exists";
    throw errors;
  }

  const avatar = gravatar.url(email, {
    s: "200", // Size
    r: "pg", // Rating
    d: "mm" // Default
  });

  const newUser = new User({
    name,
    email,
    avatar,
    password,
    role: Role.User
  });

  // hash password
  if (password) {
    newUser.password = bcrypt.hashSync(password, 10);
  }

  // save user
  return newUser.save();
}
