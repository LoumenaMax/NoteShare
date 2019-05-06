import React, { Component } from "react";
import "./Search.scss";

import Select from "react-select";
import { createSelector } from "reselect";
import createFilterOptions from "react-select-fast-filter-options";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Switch, Route, withRouter } from "react-router-dom";

//React router imports
import { Link } from "react-router-dom";

const optionsSelector = state => state.searchableSchools;

// Create a search index optimized to quickly filter options.
// The search index will need to be recreated if your options array changes.
// This index is powered by js-search: https://github.com/bvaughn/js-search
// Reselect will only re-run this if options has changed
const getIndexedOptions = createSelector(
  optionsSelector,
  options => createFilterOptions({ options })
);

class Search extends Component {
  render() {
    return <Select className="searchbar" {...this.props} />;
  }
}

function mapStateToProps(state) {
  console.log("HERE");
  console.log(state);
  return {
    filterOptions: getIndexedOptions(state),
    options: optionsSelector(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search)
);
