import axios from "axios";
import {
  GET_ERRORS,
  ADDS_LEVEL_ONE,
  VEHICLES_LOADING,
  GET_LEVEL_ONE,
  ADDS_LEVEL_TWO,
  SHOW_CAR,
  GET_CARS,
  SEARCH_GET_CARS
} from "./types";

export const addCarStep1 = (profileData, history) => dispatch => {
  axios
    .post("/cars/add/step-one", profileData)
    .then(res => {
      history.push("/cars/add/step-two/a5dcbd03-2af9-0b49-6f11-47141cb36c63");
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const addCarStep2 = (images, handle, history) => dispatch => {
  var data = new FormData();

  for (var i = 0; i < images.length; i++) {
    data.append(i, images[i]);
  }

  const config = {
    headers: { "content-type": "multipart/form-data" }
  };

  axios
    .post("/cars/add/step-two/" + handle, data, config)
    .then(res => history.push("/cars/" + res.data))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: { noFiles: "Opps.... something went wrong" }
      });
    });
};

export const getCarStep1 = (handle, history) => dispatch => {
  dispatch(setVehiclesLoading());
  axios
    .get(`/cars/add/step-two/${handle}`)
    .then(res => {
      dispatch({
        type: GET_LEVEL_ONE,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const getCarAddsStepOne = (profileData, history) => dispatch => {
  dispatch(setVehiclesLoading());
  axios
    .get("/cars/adds/step-one")
    .then(res => {
      dispatch({
        type: ADDS_LEVEL_ONE,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const getCarAddsStepTwo = () => dispatch => {
  dispatch(setVehiclesLoading());
  axios
    .get("/cars/adds/step-two")
    .then(res =>
      dispatch({
        type: ADDS_LEVEL_TWO,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getCar = handle => dispatch => {
  dispatch(setVehiclesLoading());
  axios
    .post("/cars/car/" + handle)
    .then(res =>
      dispatch({
        type: SHOW_CAR,
        payload: res.data
      })
    )
    .catch(err => {});
};

export const getCars = () => dispatch => {
  dispatch(setVehiclesLoading());

  axios
    .get("/cars")
    .then(res => {
      dispatch({
        type: GET_CARS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const searchGetCars = (carData, history) => dispatch => {
  dispatch(setVehiclesLoading());

  axios
    .get("/cars/search" + carData)
    .then(res => {
      dispatch({
        type: SEARCH_GET_CARS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// Profile loading
export const setVehiclesLoading = () => {
  return {
    type: VEHICLES_LOADING
  };
};
