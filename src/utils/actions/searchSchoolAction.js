import * as types from "./actionTypes";
import axios from "axios";

const server_url = "http://localhost:8000";

export function searchSchoolResponse(json) {
  return { type: types.SEARCH_SCHOOL_RESPONSE, server_data: json };
}

export function searchSchoolSend() {
  var headers = {};

  return dispatch => {
    axios({
      url: server_url + "/searchSchools",
      method: "GET",
      headers: headers
    })
      .then(res => {
        dispatch(searchSchoolResponse(res));
      })
      .catch(err => {
        alert("Error has occurred.");
      });
  };
}
