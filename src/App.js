import React, { Component } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
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
            <Route path="/" exact component={Home} />
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
