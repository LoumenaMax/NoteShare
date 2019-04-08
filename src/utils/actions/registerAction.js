import * as types from "./actionTypes";
import axios from "axios";

const server_url = "http://localhost:8000";

export function registerResponse(json) {
  return { type: types.REGISTER_RESPONSE, server_data: json };
}

export function registerSend(login_data) {
  var headers = {};

  return dispatch => {
    axios({
      url: server_url + "/register",
      method: "POST",
      headers: headers,
      data: login_data
    })
      .then(res => {
        dispatch(registerResponse(res));
      })
      .catch(err => {
        alert("Error has occurred.");
      });
  };
}
