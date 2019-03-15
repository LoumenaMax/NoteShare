import * as types from "./actionTypes";
import axios from "axios";

const server_url = "http://localhost:8000/api";

export function fromServer(json) {
  return { type: types.FROM_SERVER, server_data: json };
}

export function toServer(fileName) {
  var headers = {};

  return dispatch => {
    axios({
      url: server_url + "/example",
      method: "POST",
      headers: headers,
      data: {
        ex: "Hello"
      }
    })
      .then(res => {
        dispatch(fromServer(res));
      })
      .catch(err => {
        alert("Error has occurred.");
      });
  };
}
