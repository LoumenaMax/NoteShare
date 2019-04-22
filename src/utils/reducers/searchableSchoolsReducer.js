import initialState from "./initialState";
import {} from "../actions/actionTypes";

export default function credentials(
  state = initialState.searchableSchools,
  action
) {
  switch (action.type) {
    default:
      return state;
  }
}
