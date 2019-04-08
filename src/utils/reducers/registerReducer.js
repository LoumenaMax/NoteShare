import initialState from "./initialState";
import { REGISTER_SEND, REGISTER_RESPONSE } from "../actions/actionTypes";

export default function credentials(state = initialState.registered, action) {
  switch (action.type) {
    case REGISTER_SEND:
      console.log("Talk to the Server");
      return action;
    case REGISTER_RESPONSE:
      console.log(action);
      return Object.assign({}, state, {
        registered: true
      });

    default:
      return state;
  }
}
