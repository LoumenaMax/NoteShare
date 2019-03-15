import initialState from "./initialState";
import { TO_SERVER, FROM_SERVER } from "../actions/actionTypes";

export default function credentials(state = initialState.example, action) {
  switch (action.type) {
    case TO_SERVER:
      console.log("Talk to the Server");
      return action;
    case FROM_SERVER:
      console.log("Mail from the Server: " + action.server_data.data.message);
      return Object.assign({}, state, {
        example: false
      });

    default:
      return state;
  }
}
