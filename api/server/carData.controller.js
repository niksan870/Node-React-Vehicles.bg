const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const carService = require("./carData.service");
const authorize = require("./node_modules/_helpers/authorize");

// mongoose.connect("mongodb://localhost/carsDB", {
//   useNewUrlParser: true
// });

// mongoose.connection.once("open", function() {
//   console.log("Connection has been made");
// });

//Routes
router.get("/car", getCarBrands);
router.get("/car/brand/:brandName", getCarModels);
router.get("/car/brand/:brandName/model/:modelName", getCarModelGeneration);
router.get(
  "/car/brand/:brandName/model/:modelName/generation/:generationName",
  getCarModelVariationByGeneration
);
router.get(
  "/car/brand/:brandName/model/:modelName/generation/:generationName/engine/:engineName/urlPiece/:urlPiece",
  getFinalCar
);

module.exports = router;

function getCarBrands(req, res, next) {
  carService
    .getCarBrands()
    .then(brands => res.send(brands))
    .catch(e => {
      console.log(e);
      res.status(400).send(e);
      next();
    });
}

function getCarModels(req, res, next) {
  const { brandName } = req.params;
  carService
    .getCarModels(brandName)
    .then(models => res.send(models))
    .catch(e => {
      res.status(400).send(e);
      next();
    });
}

function getCarModelGeneration(req, res, next) {
  const { brandName, modelName } = req.params;
  carService
    .getCarModelGeneration(brandName, modelName)
    .then(models => {
      res.send(models);
    })
    .catch(e => {
      res.status(400).send(e);
      next();
    });
}

function getCarModelVariationByGeneration(req, res, next) {
  carService
    .getCarModelVariationByGeneration(req.params)
    .then(variation => res.send(variation))
    .catch(e => {
      res.status(400).send(e);
      next();
    });
}

function getFinalCar(req, res, next) {
  carService
    .getFinalCar(req.params)
    .then(variation => res.send(variation))
    .catch(e => {
      res.status(400).send(e);
      next();
    });
}
