import React, { Component } from "react";
import "./App.css";
import StickyBox from "react-sticky-box";
import Sidebar from "./Components/Sidebar/Sidebar";

import ExPage from "./Pages/ExPage/ExPage";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import SearchSchool from "./Pages/SearchSchool/SearchSchool";
import SearchClass from "./Pages/SearchClass/SearchClass";
import ClassPage from "./Pages/ClassPage/ClassPage";
import axios from "axios";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div className="body">
          <div className="row">
            <StickyBox>
              <Sidebar userClasses={this.props.userInfo.classes} />
            </StickyBox>
            <header className="App-header">
              <Route path="/" exact component={ExPage} />
              <Route path="/Register" exact component={Register} />
              <Route path="/Login" exact component={Login} />
              <Route path="/SearchSchool" exact component={SearchSchool} />
              <Route
                path="/SearchClass/:handle"
                exact
                component={SearchClass}
              />
              <Route path="/ClassPage/:handle" exact component={ClassPage} />
            </header>
          </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  };
}

export default connect(mapStateToProps)(App);
