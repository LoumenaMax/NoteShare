import React, { Component } from "react";
import "./App.css";
import StickyBox from "react-sticky-box";
import Sidebar from "./Components/Sidebar/Sidebar";

import ExPage from "./Pages/ExPage/ExPage";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Search from "./Pages/Search/Search";
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
            <StickyBox offsetTop={20} offsetBottom={20}>
              <Sidebar userClasses={this.props.userInfo.classes} />
            </StickyBox>
            <header className="App-header">
              <Route path="/" exact component={ExPage} />
              <Route path="/Register" exact component={Register} />
              <Route path="/Login" exact component={Login} />
              <Route path="/Search" exact component={Search} />
              <Route path="/ClassPage" exact component={ClassPage} />
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
