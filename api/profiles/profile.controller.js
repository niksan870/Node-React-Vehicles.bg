const express = require("express");
const router = express.Router();
const profileService = require("./profile.service");
const authorize = require("_helpers/authorize");
const Role = require("_helpers/role");

// routes
router.post("/", authorize(), createProfile); // private route
router.get("/", authorize(), getCurrentProfile); // public route
router.delete("/", authorize(), deleteAccount); // public route
router.get("/handle/:handle", getProfileByHandle); // public route
module.exports = router;

function createProfile(req, res, next) {
  profileService
    .createProfile(req.body, req.user)
    .then(profile => res.json(profile))
    .catch(err => {
      res.status(400).json(err);
    });
}

function getCurrentProfile(req, res, next) {
  profileService
    .getCurrentProfile(req.user.id)
    .then(profile => res.send(profile))
    .catch(err => {
      res.status(400).json(err);
    });
}

function deleteAccount(req, res, next) {
  profileService
    .deleteAccount(req.user.id)
    .then(account => res.send(account))
    .catch(err => {
      res.status(400).json(err);
    });
}
function getProfileByHandle(req, res, next) {
  profileService
    .getProfileByHandle(req.params)
    .then(profile => res.send(profile))
    .catch(err => {
      res.status(400).json(err);
    });
}
