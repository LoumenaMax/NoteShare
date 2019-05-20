import * as types from "./actionTypes";
import axios from "axios";

const server_url = "http://localhost:8000";

export function searchClassResponse(json) {
  return { type: types.SEARCH_CLASS_RESPONSE, server_data: json };
}

export function searchClassSend(school_data) {
  var headers = {};
  return dispatch => {
    axios({
      url: server_url + "/searchClasses",
      method: "POST",
      headers: headers,
      data: school_data
    })
      .then(res => {
        dispatch(searchClassResponse(res));
      })
      .catch(err => {
        alert("Error has occurred.");
      });
  };
}
