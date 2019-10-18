import {
  CARS_DATA_GET_BRANDS,
  CARS_DATA_GET_MODELS,
  CARS_DATA_GET_GENERATIONS,
  CARS_DATA_GET_MODIFICATIONS,
  GET_FINAL_CAL,
  RESET_CAR_SEARCH,
  FIRST_CAR_REVIEWS,
  SINGLE_CAR_REVIEW
} from "../actions/types";

const initialState = {
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CARS_DATA_GET_BRANDS:
      return {
        ...state,
        carBrands: action.payload,
        loading: false
      };
    case CARS_DATA_GET_MODELS:
      return {
        ...state,
        carModels: action.payload,
        loading: false
      };
    case CARS_DATA_GET_GENERATIONS:
      return {
        ...state,
        carGenerations: action.payload,
        loading: false
      };
    case CARS_DATA_GET_MODIFICATIONS:
      return {
        ...state,
        carModifications: action.payload,
        loading: false
      };
    case GET_FINAL_CAL:
      return {
        ...state,
        finalCar: action.payload,
        loading: false
      };
    case RESET_CAR_SEARCH:
      return {
        ...state,
        fincalCar: {},
        carModifications: {},
        carGenerations: {},
        carModels: {}
      };
    case FIRST_CAR_REVIEWS:
      return {
        ...state,
        firstCarReviews: action.payload
      };
    case SINGLE_CAR_REVIEW:
      return {
        ...state,
        singleCarReview: action.payload
      };
    default:
      return state;
  }
}
