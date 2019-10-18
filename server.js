require("rootpath")();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const errorHandler = require("_helpers/error-handler");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true
  })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// api routes
app.use("/profile", require("./api/profiles/profile.controller"));
app.use("/reviews", require("./api/reviews/reviews.controller"));
app.use("/users", require("./api/users/users.controller"));
app.use("/cars", require("./api/cars/cars.controller"));

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === "production" ? 80 : 4000;
const server = app.listen(port, function() {
  console.log("Server listening on port " + port);
});
