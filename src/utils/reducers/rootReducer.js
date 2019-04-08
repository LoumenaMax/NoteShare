import { combineReducers } from "redux";
import example from "./exampleReducer";
import register from "./registerReducer";
import login from "./loginReducer";

const rootReducer = combineReducers({
  example,
  register,
  login
});

export default rootReducer;
