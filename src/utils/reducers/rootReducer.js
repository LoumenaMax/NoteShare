import { combineReducers } from "redux";
import example from "./exampleReducer";
import register from "./registerReducer";
import login from "./loginReducer";
import userInfo from "./userInfoReducer";

const rootReducer = combineReducers({
  example,
  register,
  login,
  userInfo
});

export default rootReducer;
