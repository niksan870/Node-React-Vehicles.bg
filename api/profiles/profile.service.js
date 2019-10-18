const config = require("config.json");
const jwt = require("jsonwebtoken");
const Role = require("_helpers/role");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
var crypto = require("crypto");
const Guid = require("guid");

//Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const validateProfileInput = require("../../validation/profile");

//Load User Model
const User = require("../../models/User");
const Profile = require("../../models/Profile");

module.exports = {
  createProfile,
  getCurrentProfile,
  deleteAccount,
  getProfileByHandle
};

async function createProfile(reqBody, reqUser) {
  try {
    const { errors, isValid } = validateProfileInput(reqBody);
    //Chack Validation
    if (!isValid) {
      return res.status(400).json(errors);
    } else {
      const profileFields = {};
      const { id } = reqUser;
      const {
        phoneNumber,
        firstName,
        handle,
        lastName,
        location,
        gender,
        bio,
        age,
        instagram,
        facebook,
        youtube,
        twitter,
        linkedin
      } = reqBody;

      if (phoneNumber) profileFields.phoneNumber = phoneNumber;
      if (firstName) profileFields.firstName = firstName;
      if (location) profileFields.location = location;
      if (lastName) profileFields.lastName = lastName;
      if (gender) profileFields.gender = gender;
      if (handle) profileFields.handle = handle;
      if (age) profileFields.age = age;
      if (bio) profileFields.bio = bio;

      profileFields.social = {};
      if (youtube) profileFields.social.youtube = youtube;
      if (twitter) profileFields.social.twitter = twitter;
      if (facebook) profileFields.social.facebook = facebook;
      if (linkedin) profileFields.social.linkedin = linkedin;
      if (instagram) profileFields.social.instagram = instagram;

      const profile = await Profile.findOne({ user: id });

      if (!profile) {
        guid = await Guid.create();
        const curProfile = await Profile.findOne({
          handle: profileFields.handle
        });

        if (curProfile) {
          errors.handle = "handle already exists";
          throw errors;
        }

        profileFields.handle = guid.value;

        profileFields.user = id;
        const newProfile = new Profile(profileFields);
        return await newProfile.save();
      } else {
        const curProfile = await Profile.findOne({
          handle: profileFields.handle
        });

        profileFields.handle =
          `${profileFields.firstName}-${profileFields.lastName}`.toLowerCase() +
          crypto
            .createHash("md5")
            .update(profileFields.age)
            .digest("hex") +
          Math.floor(Math.random() * 100000 + 1);

        if (curProfile.handle !== profile.handle) {
          errors.handle = "handle already exists";
          throw errors;
        }

        const updatedProfile = await Profile.findOneAndUpdate(
          { user: id },
          { $set: profileFields },
          { new: true }
        );

        return updatedProfile;
      }
    }
  } catch (error) {
    return error;
  }
}

async function getCurrentProfile(userID) {
  try {
    const errors = {};
    const currentProfile = await Profile.findOne({
      user: userID
    }).populate("user", ["name", "avatar"]);
    if (!currentProfile) {
      errors.noprofile = "There is no profile for this user.";
      throw errors;
    }
    return currentProfile;
  } catch (error) {
    return error;
  }
}

async function deleteAccount(userID) {
  try {
    const userProfile = await Profile.findOneAndDelete({ user: userID });
    const accoutUser = User.findOneAndDelete({ _id: userProfile.user });
    return accoutUser;
  } catch (error) {
    return error;
  }
}

async function getProfileByHandle({ handle }) {
  try {
    const profile = await Profile.findOne({ handle: handle }).populate("user", [
      "name",
      "avatar"
    ]);

    if (!profile) {
      errors.noprofile = "There is no profile for this user.";
      throw errors;
    }

    return profile;
    // return accoutUser;
  } catch (error) {
    return error;
  }
}
