const express = require("express");
const router = express.Router();
const carsService = require("./cars.service");
const authorize = require("_helpers/authorize");
const Role = require("_helpers/role");
const { isEmpty } = require("_helpers/helperFunctions");
var multer = require("multer");

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + file.originalname);
  }
});

var upload = multer({ storage: storage });

// routes
router.post("/add/step-one", authorize(), createCarStep1);
router.get("/adds/step-one", authorize(), getCarsStep1);
router.post(
  "/add/step-two/:handle",
  upload.any("myFiles"),
  authorize(),
  createCarStep2
);
router.get("/adds/step-two", authorize(), getCarsStep2);
router.get("/add/step-two/:handle", authorize(), getCarStep2);
router.post("/car/:handle", getCar);
router.get("/search", searchCars);
router.get("/single", getCars);
router.get("/", getCars);

module.exports = router;

// Save Car Step 1
function createCarStep1(req, res, next) {
  carsService
    .createCarStep1(req.body, req.user)
    .then(car => res.send(car))
    .catch(err => res.status(400).json(err));
}

// Get all step 1 cars
function getCarsStep1(req, res, next) {
  carsService
    .getCarsStep1(req.user)
    .then(cars => res.send(cars))
    .catch(err => res.status(400).json(err));
}

// Finish car with uploading images.
function createCarStep2(req, res, next) {
  carsService
    .createCarStep2(req.files, req.params.handle, req.user.id)
    .then(files => res.send(req.params.handle))
    .catch(err => res.status(400).json(err));
}

// Get every owner car that's has staep 2
function getCarsStep2(req, res, next) {
  let { id } = req.user;
  carsService
    .getCarsStep2(id)
    .then(cars => res.send(cars))
    .catch(err => res.status(400).json(err));
}

// Get car for step 2
function getCarStep2(req, res, next) {
  let { handle } = req.params;
  let { id } = req.user;
  carsService
    .getCarStep2(handle, id)
    .then(cars => res.send(cars))
    .catch(err => res.status(400).json(err));
}

function getCar(req, res, next) {
  let { handle } = req.params;
  carsService
    .getCar(handle)
    .then(data => res.send(data))
    .catch(err => res.status(400).json(err));
}

function getCars(req, res, next) {
  carsService
    .getCars()
    .then(data => res.send(data))
    .catch(err => res.status(400).json(err));
}

function searchCars(req, res, next) {
  let query;
  if (isEmpty(req.query)) {
    query = {};
  } else {
    query = req.query;
  }
  carsService
    .searchCars(query)
    .then(data => res.send(data))
    .catch(err => res.status(400).json(err));
}
