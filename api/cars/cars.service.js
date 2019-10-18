const Car = require("../../models/Cars");
const Guid = require("guid");
const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
var fs = require("fs");

const validateProfileInput = require("../../validation/carText");

module.exports = {
  createCarStep1,
  addsStepOne,
  getCarsStep1,
  getCarStep2,
  createCarStep2,
  getCarsStep2,
  getCar,
  getCars,
  searchCars
};

async function createCarStep1(reqBody, reqUser) {
  try {
    const { errors, isValid } = await validateProfileInput(reqBody);
    if (!isValid) {
      throw errors;
    }
    guid = await Guid.create();

    reqBody.step = 1;
    reqBody.user = reqUser.id;
    reqBody.type = "car";
    reqBody.handle = guid.value;

    const car = new Car(reqBody);

    return await car.save();
  } catch (error) {
    throw error;
  }
}

async function addsStepOne(reqUser) {
  try {
    const cars = await Car.find({ user: reqUser.id, step: 1 });
    return cars;
  } catch (error) {
    throw error;
  }
}

async function getCarsStep1(reqUser) {
  try {
    const cars = await Car.find({ user: reqUser.id, step: 1 });
    return cars;
  } catch (error) {
    throw error;
  }
}

async function getCarStep2(handle, user) {
  try {
    const car = await Car.findOne({ handle: handle, step: 1, user });

    return car;
  } catch (error) {
    throw error;
  }
}

async function getCarsStep2(userID) {
  try {
    const cars = await Car.find(
      { user: userID, step: 2 },
      {
        made: 1,
        model: 1,
        realeaseDateMonth: 1,
        realeaseDateYear: 1,
        price: 1,
        currency: 1,
        handle: 1,
        type: 1
      }
    );
    return cars;
  } catch (error) {
    throw error;
  }
}

async function createCarStep2(reqFiles, handle, userID) {
  try {
    if (reqFiles.length <= 0) {
      let errors = {};
      errors.file = "Please choose files";
      throw errors;
    }
    let images = [];

    reqFiles.map(async file => {
      var img = fs.readFileSync(file.path);
      var encode_image = img.toString("base64");

      images.push({
        contentType: file.mimetype,
        data: Buffer.from(encode_image, "base64")
      });
    });

    return await Car.findOneAndUpdate(
      { handle, user: userID },
      {
        $set: {
          images: [...images],
          step: 2
        }
      },
      { new: true },
      (err, doc) => {
        if (err) {
          throw (errors.file = "Something wrong when updating data!");
        }

        return doc;
      }
    );
  } catch (errors) {
    throw errors;
  }
}

async function getCar(handle) {
  try {
    const car = await Car.findOne({ handle: handle });
    const profile = await Profile.findOne(
      { user: car.user },
      { handle: 1, firstName: 1, lastName: 1 }
    );
    return { car, profile };
  } catch (error) {
    throw error;
  }
}

async function getCars() {
  try {
    const cars = await Car.find(
      { step: { $in: [2] } },
      { handle: 1, made: 1, model: 1, modification: 1, images: 1, user: 1 }
    ).limit(5);

    return cars;
  } catch (error) {
    throw error;
  }
}

async function searchCars(carData) {
  try {
    let queryData = {};
    const options = {
      page: 1,
      limit: 10
    };

    for (var key in carData) {
      if (carData.hasOwnProperty(key)) {
        if (key === "price") {
          queryData[key] = { $lte: carData[key] };
        } else {
          queryData[key] = carData[key];
        }
      }
    }

    const cars = await Car.find(
      queryData,
      {
        handle: 1,
        made: 1,
        model: 1,
        modification: 1,
        images: { $slice: 1 },
        user: 1,
        currency: 1,
        price: 1
      },
      options
    );

    return cars;
  } catch (error) {
    throw error;
  }
}
