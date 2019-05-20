import initialState from "./initialState";
import {
  SEARCH_CLASS_RESPONSE,
  SEARCH_CLASS_SEND
} from "../actions/actionTypes";

export default function credentials(
  state = initialState.searchableClasses,
  action
) {
  switch (action.type) {
    case SEARCH_CLASS_SEND:
      console.log("Talk to the Server");
      return action;
    case SEARCH_CLASS_RESPONSE:
      console.log("Mail from the Server");
      console.log(action);
      return Object.assign({}, state, {
        searchableClasses: action.server_data.data.classes
      });

    default:
      return state;
  }
}
