import React, { Component } from "react";
import "./Login.scss";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as loginAction from "../../utils/actions/loginAction";
import { Switch, Route, withRouter } from "react-router-dom";

//React router imports
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    this.props.loginAction.loginSend(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div className="loginContainer">
        <form onSubmit={this.handleSubmit}>
          <h1 className="item">NoteShare</h1>
          <input
            className="item"
            type="email"
            value={this.state.email}
            placeholder="Email address"
            onChange={this.handleEmailChange}
          />
          <input
            className="item"
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.handlePasswordChange}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    loginAction: bindActionCreators(loginAction, dispatch)
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
