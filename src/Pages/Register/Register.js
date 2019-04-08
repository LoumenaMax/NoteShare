import React, { Component } from "react";
import "./Register.scss";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as registerAction from "../../utils/actions/registerAction";
import { Switch, Route, withRouter } from "react-router-dom";

//React router imports
import { Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    this.props.registerAction.registerSend(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div className="ex-container">
        <h1>NoteShare</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="name"
            value={this.state.name}
            placeholder="Name"
            onChange={this.handleNameChange}
          />
          <input
            type="email"
            value={this.state.email}
            placeholder="Email address"
            onChange={this.handleEmailChange}
          />
          <input
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
    registerAction: bindActionCreators(registerAction, dispatch)
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Register)
);
