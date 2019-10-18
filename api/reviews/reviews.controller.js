const express = require("express");
const router = express.Router();
const carService = require("./reviews.service");

//Routes
router.get("/car", getCarBrands);
router.post("/car/add", addCarReview);
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
router.post("/car/all", getfirstTenCarReviews);
router.post("/car/:id", getSingleCarReview);

module.exports = router;

function getCarBrands(req, res, next) {
  carService
    .getCarBrands()
    .then(brands => res.send(brands))
    .catch(e => {
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

function addCarReview(req, res, next) {
  carService
    .addCarReview(req.body)
    .then(review => {
      res.send();
    })
    .catch(e => {
      res.status(400).json(e);
      next();
    });
}

function getfirstTenCarReviews(req, res, next) {
  carService
    .getfirstTenCarReviews()
    .then(reviews => res.send(reviews))
    .catch(e => {
      res.status(400).json(e);
      next();
    });
}
function getSingleCarReview(req, res, next) {
  let { id } = req.params;
  carService
    .getSingleCarReview(id)
    .then(review => res.send(review))
    .catch(e => {
      res.status(400).json(e);
      next();
    });
}
