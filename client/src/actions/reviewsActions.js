import axios from "axios";

import { GET_ERRORS, FIRST_CAR_REVIEWS, SINGLE_CAR_REVIEW } from "./types";

// Add car review
export const addReviewCar = (reviewData, history) => dispatch => {
  if (reviewData.profileAvatar == undefined) {
    reviewData.profileAvatar = "";
  }
  axios
    .post("/reviews/car/add", reviewData)
    .then(res => {
      history.push("/reviews");
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// Get current profile
export const getfirstTenCarReviews = history => dispatch => {
  axios
    .post("/reviews/car/all")
    .then(res => {
      console.log(res.data);
      dispatch({
        type: FIRST_CAR_REVIEWS,
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

export const getSingleCarReview = (id, history) => dispatch => {
  axios
    .post("/reviews/car/" + id)
    .then(res => {
      dispatch({
        type: SINGLE_CAR_REVIEW,
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
