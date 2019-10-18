import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import carsReducer from "./carsReducer";
import carsData from "./carsData";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  carAdds: carsReducer,
  carsData: carsData
});
