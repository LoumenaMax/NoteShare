import React, { Component } from "react";
import "./SearchClass.scss";

import Select from "react-select";
import { createSelector } from "reselect";
import createFilterOptions from "react-select-fast-filter-options";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Switch, Route, withRouter } from "react-router-dom";
import * as searchClassAction from "../../utils/actions/searchClassAction";
import loadingImg from "./../../Images/loading.gif";

//React router imports
import { Link } from "react-router-dom";

class SearchClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      searchableClasses: []
    };
    this.props.searchAction.searchClassSend({
      school_id: props.match.params.handle
    });
  }

  handleChange = selectedOption => {
    console.log(selectedOption);
    this.props.history.push("/ClassPage/" + selectedOption["value"]);
  };

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({
      searchableClasses: nextProps.searchableClasses.searchableClasses,
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
          options={this.state.searchableClasses}
        />
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    searchableClasses: state.searchableClasses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchAction: bindActionCreators(searchClassAction, dispatch)
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchClass)
);
