import initialState from "./initialState";
import {
  SEARCH_SCHOOL_RESPONSE,
  SEARCH_SCHOOL_SEND
} from "../actions/actionTypes";

export default function credentials(
  state = initialState.searchableSchools,
  action
) {
  switch (action.type) {
    case SEARCH_SCHOOL_SEND:
      console.log("Talk to the Server");
      return action;
    case SEARCH_SCHOOL_RESPONSE:
      console.log("Mail from the Server");
      console.log(action);
      return Object.assign({}, state, {
        searchableSchools: action.server_data.data.schools
      });

    default:
      return state;
  }
}
