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
      var newPosts = [];
      for (var post in action.server_data.data.posts) {
        var file = action.server_data.data.posts[post];
        newPosts.push(file);
        console.log(post);
      }
      console.log(state);
      return Object.assign({}, state, {
        notes: newPosts
      });

    default:
      return state;
  }
}
