import React, { Component } from "react";
import "./Accordion.scss";

export default class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      children: this.props.children
    };
    console.log(this.state.children);
  }

  onClickMenu = () => {
    this.setState({
      open: !this.state.open
    });
    console.log(this.state.open);
  };

  render() {
    return (
      <div>
        <div className="header" onClick={this.onClickMenu}>
          <button className="accordion mcontainer">{this.props.name}</button>
          <div className="drop-down">
            {!this.state.open && <span>&#9664;</span>}
            {this.state.open && <span>&#9660;</span>}
          </div>
        </div>
        {this.state.open &&
          this.state.children.map(child => {
            return <div className="child mcontainer">{child}</div>;
          })}
      </div>
    );
  }
}
