import * as types from "./actionTypes";
import axios from "axios";

const server_url = "http://localhost:8000";

export function loginResponse(json) {
  return { type: types.LOGIN_RESPONSE, server_data: json };
}

export function loginSend(login_data) {
  var headers = {};

  return dispatch => {
    axios({
      url: server_url + "/login",
      method: "POST",
      headers: headers,
      data: login_data
    })
      .then(res => {
        dispatch(loginResponse(res));
      })
      .catch(err => {
        alert("Error has occurred.");
      });
  };
}
