import React from "react";
import "./Sidebar.scss";

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="label">Sidebar</div>
        <div className="fauxNav">
          {Array.from(new Array(20), (_, i) => (
            <div key={i} className="fauxNavElement" />
          ))}
        </div>
      </div>
    );
  }
}
