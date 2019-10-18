const express = require("express");
const router = express.Router();
const userService = require("./user.service");
const authorize = require("_helpers/authorize");
const Role = require("_helpers/role");

// routes
router.post("/login", authenticate); // public route
router.post("/register", register); // public route
router.get("/", authorize(Role.Admin), getAll); // admin only
router.get("/:id", authorize(), getById); // all authenticated users
module.exports = router;

function authenticate(req, res, next) {
  userService
    .authenticate(req.body)
    .then(user => {
      return user
        ? res.json(user)
        : res
            .status(400)
            .json({ message: "Username or password is incorrect" });
    })
    .catch(err => {
      res.status(400).json(err);
    });
}

function getAll(req, res, next) {
  userService
    .getAll()
    .then(users => res.json(users))
    .catch(err => next(err));
}

function getById(req, res, next) {
  const currentUser = req.user;
  const id = parseInt(req.params.id);

  // only allow admins to access other user records
  if (id !== currentUser.sub && currentUser.role !== Role.Admin) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  userService
    .getById(req.params.id)
    .then(user => (user ? res.json(user) : res.sendStatus(404)))
    .catch(err => next(err));
}

function register(req, res, next) {
  userService
    .registrate(req.body)
    .then(user => res.json(user))
    .catch(errors => {
      res.status(400).json(errors);
      next();
    });
}
