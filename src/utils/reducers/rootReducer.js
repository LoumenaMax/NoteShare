import { combineReducers } from "redux";
import example from "./exampleReducer";
import register from "./registerReducer";

const rootReducer = combineReducers({
  example,
  register
});

export default rootReducer;
