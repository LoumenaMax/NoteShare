import initialState from "./initialState";
import { Base64 } from "js-base64";
import {
  RETRIEVE_POSTS_SEND,
  RETRIEVE_POSTS_RESPONSE
} from "../actions/actionTypes";

export default function credentials(state = initialState.currentClass, action) {
  switch (action.type) {
    case RETRIEVE_POSTS_SEND:
      console.log("Talk to the Server");
      return action;
    case RETRIEVE_POSTS_RESPONSE:
      console.log("Mail from the Server");
      console.log(action.server_data.data.posts);
      return Object.assign({}, state, {
        notes: action.server_data.data.posts
      });

    default:
      return state;
  }
}
