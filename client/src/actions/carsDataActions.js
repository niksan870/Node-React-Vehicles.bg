import axios from "axios";
import {
  GET_ERRORS,
  CARS_DATA_GET_BRANDS,
  CARS_DATA_GET_MODELS,
  CARS_DATA_GET_GENERATIONS,
  CARS_DATA_GET_MODIFICATIONS,
  VEHICLES_LOADING,
  GET_FINAL_CAL,
  RESET_CAR_SEARCH
} from "./types";

//Get all car Brands
export const getBrands = () => dispatch => {
  axios
    .get("/reviews/car/")
    .then(res => {
      dispatch({
        type: CARS_DATA_GET_BRANDS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.data
      })
    );
};

//Get all car Models
export const getModels = brand => dispatch => {
  axios
    .get("/reviews/car/brand/" + brand)
    .then(res => {
      dispatch({
        type: CARS_DATA_GET_MODELS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.data
      });
    });
};

//Get all car getCarVariation
export const getCarVariation = (brand, model, generation) => dispatch => {
  axios
    .get(`/reviews/car/brand/${brand}/model/${model}/generation/${generation}`)
    .then(res => {
      dispatch({
        type: CARS_DATA_GET_MODELS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.data
      });
    });
};

//Get all car getCarGeneration
export const getCarGeneration = (brand, model) => dispatch => {
  axios
    .get(`/reviews/car/brand/${brand}/model/${model}`)
    .then(res => {
      dispatch({
        type: CARS_DATA_GET_GENERATIONS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.data
      });
    });
};

//Get all car getCarModifications
export const getCarModifications = (brand, model, generation) => dispatch => {
  axios
    .get(`/reviews/car/brand/${brand}/model/${model}/generation/${generation}`)
    .then(res => {
      dispatch({
        type: CARS_DATA_GET_MODIFICATIONS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.data
      });
    });
};

//Get all car getCarModifications
export const getCarFinal = (
  brand,
  model,
  generation,
  engine,
  urlPiece,
  history
) => dispatch => {
  if (urlPiece) {
    console.log(123123);
    axios
      .get(
        `/reviews/car/brand/${brand}/model/${model}/generation/${generation}/engine/${engine}/urlPiece/${urlPiece}`
      )
      .then(res => {
        history.push(`/reviews/add/${urlPiece}`);
        dispatch({
          type: GET_FINAL_CAL,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: GET_ERRORS,
          payload: err.data
        });
      });
  }
};

// Reset car Search
export const resetCarSearch = () => {
  return {
    type: RESET_CAR_SEARCH
  };
};

// Profile loading
export const setVehiclesLoading = () => {
  return {
    type: VEHICLES_LOADING
  };
};
