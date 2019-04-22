import React, { Component } from "react";
import "./TabList.scss";

class Tab extends Component {
  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    let className = "tab-list-item";
    if (this.props.activeTab === this.props.label) {
      className += " tab-list-active";
    }

    return (
      <li className={className} onClick={this.props.onClick}>
        {this.props.label}
      </li>
    );
  }
}

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.children[0].props.label
    };
    this.onClickTabItem = this.onClickTabItem.bind(this);
  }

  onClickTabItem(tab) {
    this.setState({ activeTab: tab });
  }

  render() {
    return (
      <div className="tabs">
        <ol className="tab-list">
          <div className="tab-margin">
            {this.props.children.map(child => {
              const { label } = child.props;

              return (
                <Tab
                  activeTab={this.state.activeTab}
                  key={label}
                  label={label}
                  onClick={() => this.onClickTabItem(label)}
                />
              );
            })}
          </div>
        </ol>
        <div className="tab-content">
          {this.props.children.map(child => {
            if (child.props.label !== this.state.activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
