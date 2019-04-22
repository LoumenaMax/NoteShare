import { combineReducers } from "redux";
import example from "./exampleReducer";
import register from "./registerReducer";
import login from "./loginReducer";
import userInfo from "./userInfoReducer";
import currentClass from "./currentClassReducer";
import searchableSchools from "./searchableSchoolsReducer";

const rootReducer = combineReducers({
  example,
  register,
  login,
  userInfo,
  currentClass,
  searchableSchools
});

export default rootReducer;
