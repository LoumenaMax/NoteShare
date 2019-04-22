import React, { Component } from "react";
import "./ExPage.scss";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as exampleAction from "../../utils/actions/exampleAction";
import { Switch, Route, withRouter } from "react-router-dom";

//React router imports
import { Link } from "react-router-dom";

class ExPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    this.props.history.push("/Login");
  }

  sendToServer = () => {
    this.props.exampleAction.toServer();
  };

  render() {
    return (
      <div className="ex-container">
        <button className="ex-button" onClick={() => this.sendToServer()}>
          <div className="ex-button-test">Test</div>
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stateVariable: state.example
  };
}

function mapDispatchToProps(dispatch) {
  return {
    exampleAction: bindActionCreators(exampleAction, dispatch)
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ExPage)
);
