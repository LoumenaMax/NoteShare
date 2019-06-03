import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Switch, Route, withRouter } from "react-router-dom";
import Tabs from "./../../Components/TabList/TabList";
import Notes from "./../../Components/Notes/Notes";
import "./ClassPage.scss";
import * as retrievePostsAction from "../../utils/actions/retrievePostsAction";
//React router imports
import { Link } from "react-router-dom";

class ClassPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      notes: []
    };
    this.props.retrievePostsAction.retrievePostsSend({
      class_id: props.match.params.handle
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({
      loading: false,
      notes: nextProps.notes
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Tabs>
          <div label="Notes">
            <Notes children={this.state.notes} />
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
  return {
    notes: state.retrievePosts.notes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    retrievePostsAction: bindActionCreators(retrievePostsAction, dispatch)
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ClassPage)
);
