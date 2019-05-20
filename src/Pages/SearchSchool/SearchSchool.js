import React, { Component } from "react";
import "./SearchSchool.scss";

import Select from "react-select";
import { createSelector } from "reselect";
import createFilterOptions from "react-select-fast-filter-options";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Switch, Route, withRouter } from "react-router-dom";
import * as searchSchoolAction from "../../utils/actions/searchSchoolAction";
import loadingImg from "./../../Images/loading.gif";

//React router imports
import { Link } from "react-router-dom";

class SearchSchool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      searchableSchools: []
    };
    this.props.searchAction.searchSchoolSend();
  }

  handleChange = selectedOption => {
    console.log(selectedOption);
    this.props.history.push("/SearchClass/" + selectedOption["value"]);
  };

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({
      searchableSchools: nextProps.searchableSchools.searchableSchools,
      loading: false
    });
  }

  render() {
    if (this.state.loading) {
      return <img className="loading" src={loadingImg} alt="Loading..." />;
    } else {
      return (
        <Select
          className="searchbar"
          onChange={this.handleChange}
          options={this.state.searchableSchools}
        />
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    searchableSchools: state.searchableSchools
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchAction: bindActionCreators(searchSchoolAction, dispatch)
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchSchool)
);
