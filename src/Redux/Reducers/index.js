import counterReducer from "./Counter/counterReducer";
import userReducer from "./User/userReducer";
import { combineReducers } from "redux";
const rootReducers = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export default rootReducers;
