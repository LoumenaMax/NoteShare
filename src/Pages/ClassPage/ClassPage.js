import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Switch, Route, withRouter } from "react-router-dom";
import Tabs from "./../../Components/TabList/TabList";
import Notes from "./../../Components/Notes/Notes";
import "./ClassPage.scss";
//React router imports
import { Link } from "react-router-dom";

class ClassPage extends Component {
  render() {
    return (
      <div className="wrapper">
        <Tabs>
          <div label="Notes">
            <Notes />
          </div>
          <div label="Discussion">
            <div className="discussion-wrapper">
              After &apos;while, <em>Crocodile</em>!
            </div>
          </div>
        </Tabs>
      </div>
    );
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
