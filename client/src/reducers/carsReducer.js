import {
  SEARCH_GET_CARS,
  ADDS_LEVEL_ONE,
  VEHICLES_LOADING,
  GET_LEVEL_ONE,
  ADDS_LEVEL_TWO,
  SHOW_CAR,
  GET_CARS
} from "../actions/types";

const initialState = {
  addsLevelOne: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADDS_LEVEL_ONE:
      return {
        ...state,
        addsLevelOne: action.payload,
        loading: false
      };
    case VEHICLES_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_LEVEL_ONE:
      return {
        ...state,
        addLevelOne: action.payload,
        loading: false
      };
    case ADDS_LEVEL_TWO:
      return {
        ...state,
        addsLevelTwo: action.payload,
        loading: false
      };
    case SHOW_CAR:
      return {
        ...state,
        showCar: action.payload.car,
        profile: action.payload.profile,
        loading: false
      };
    case GET_CARS:
      return {
        ...state,
        showCars: action.payload,
        loading: false
      };
    case SEARCH_GET_CARS:
      return {
        ...state,
        searchShowCars: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
