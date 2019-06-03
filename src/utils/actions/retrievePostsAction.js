import * as types from "./actionTypes";
import axios from "axios";

const server_url = "http://localhost:8000";

export function retrievePostsResponse(json) {
  return { type: types.RETRIEVE_POSTS_RESPONSE, server_data: json };
}

export function retrievePostsSend(class_id) {
  var headers = {};
  console.log("HERE");
  return dispatch => {
    axios({
      url: server_url + "/retrievePosts",
      method: "POST",
      headers: headers,
      data: class_id
    })
      .then(res => {
        dispatch(retrievePostsResponse(res));
      })
      .catch(err => {
        alert("Error has occurred.");
      });
  };
}
