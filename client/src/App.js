import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import PrivateRoute from "./components/common/PrivateRoute";

import { Provider } from "react-redux";
import store from "./store";

import Landing from "./components/Home/Landing";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import CarForm from "./components/add-vehicles/CarForm";
import MainReview from "./components/add-vehicles/MainReview";
import SingleReview from "./components/add-vehicles/SingleReview";
import MainForm from "./components/add-vehicles/MainForm";
import Profile from "./components/profile/Profile";
import CreateProfile from "./components/profile/create-profile/CreateProfile";
import EditProfile from "./components/profile/edit-profile/EditProfile";
import Dashboard from "./components/dashboard/Dashboard";
import addCarStep2 from "./components/Car/addCar/addCarStep2";
import addCarStep1 from "./components/Car/addCar/addCarStep1";
import ShowCar from "./components/Car/viewCar/showCar";
import viewCars from "./components/Car/viewCars/viewCars";
import AddReview from "./components/add-vehicles/CarReview/Add";

// Check for token
if (localStorage.jwtToken) {
  // Set the auth token header off
  setAuthToken(localStorage.jwtToken);
  // Decode toke and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  //Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    // Clear current Profile
    // store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";
  }
}

const App = () => {
  // do what you will the the param
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route path="/cars/search" component={viewCars} />
          <Route exact path="/profile/:handle" component={Profile} />
          <div className="conainter">
            <Route exact path="/signup" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/adds" component={MainForm} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/reviews" component={MainReview} />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/reviews/car/:id"
                component={SingleReview}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/cars/add/text"
                component={addCarStep1}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/cars/add/step-two/:handle"
                component={addCarStep2}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/reviews/add/:handle"
                component={AddReview}
              />
            </Switch>
            <Route exact path="/cars/single/:handle" component={ShowCar} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/review/cars/add" component={CarForm} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
