import initialState from "./initialState";
import { LOGIN_RESPONSE, LOGIN_SEND } from "../actions/actionTypes";

export default function credentials(state = initialState.login, action) {
  switch (action.type) {
    case LOGIN_SEND:
      console.log("Talk to the Server");
      return action;
    case LOGIN_RESPONSE:
      console.log("Mail from the Server");
      console.log(action);
      return action;

    default:
      return state;
  }
}
