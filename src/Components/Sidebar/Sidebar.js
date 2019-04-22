import React from "react";
import "./Sidebar.scss";
import logo from "./../../Images/Logo.png";
import Accoridon from "./../Accordion/Accordion";

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <img className="logo" src={logo} alt="Logo" />
        <Accoridon name="classes" children={this.props.userClasses} />
        <div className="fauxNav">
          {Array.from(new Array(20), (_, i) => (
            <div key={i} className="fauxNavElement" />
          ))}
        </div>
      </div>
    );
  }
}
