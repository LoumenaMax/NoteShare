import initialState from "./initialState";
import { REGISTER_SEND, REGISTER_RESPONSE } from "../actions/actionTypes";

export default function credentials(state = initialState.example, action) {
  switch (action.type) {
    case REGISTER_SEND:
      console.log("Talk to the Server");
      return action;
    case REGISTER_RESPONSE:
      console.log("Mail from the Server");
      console.log(action);
      return action;

    default:
      return state;
  }
}
