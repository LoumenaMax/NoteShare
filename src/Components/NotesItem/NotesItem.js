import React, { Component } from "react";
import "./NotesItem.scss";

//TODO: REMOVE THIS
import image from "./../../Images/Notes.jpg";

export default class NotesItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "currently unused",
      date: "March 12, 2019",
      positionNumber: 1,
      name: "Default Name",
      author: "Mr. Awesome"
    };
  }

  render() {
    return (
      <div>
        <img className="prev-image" src={image} />
        <p>{this.state.name}</p>
        <p>{"Author: " + this.state.author}</p>
        <p>{"Last Updated: " + this.state.date}</p>
      </div>
    );
  }
}
