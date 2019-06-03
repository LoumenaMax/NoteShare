import React, { Component } from "react";
import "./Notes.scss";
import NotesItem from "./../NotesItem/NotesItem";

export default class Notes extends Component {
  render() {
    return (
      <div className="wrapper">
        {this.props.children.map(child => {
          return (
            <div className="child-wrapper">
              <NotesItem file={child} />
            </div>
          );
        })}
      </div>
    );
  }
}
