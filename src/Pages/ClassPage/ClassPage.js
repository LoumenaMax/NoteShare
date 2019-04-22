import React, { Component } from "react";
import "./ClassPage.scss";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Switch, Route, withRouter } from "react-router-dom";

//React router imports
import { Link } from "react-router-dom";

class ClassPage extends Component {
  render() {
    return <div className="ex-container" />;
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ClassPage)
);
