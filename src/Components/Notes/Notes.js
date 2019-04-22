import React, { Component } from "react";
import "./Notes.scss";
import NotesItem from "./../NotesItem/NotesItem";

export default class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      children: [1, 2, 3, 4, 5, 6, 7]
    };
  }

  render() {
    return (
      <div className="wrapper">
        {this.state.children.map(child => {
          return <NotesItem key={child} />;
        })}
      </div>
    );
  }
}
