import React, { Component } from "react";
import "./App.css";
import ExPage from "./Pages/ExPage/ExPage";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Route path="/" exact component={ExPage} />
            <Route path="/Register" exact component={Register} />
            <Route path="/Login" exact component={Login} />
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
