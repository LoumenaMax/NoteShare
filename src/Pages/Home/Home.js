import React, { Component } from "react";
import "./Home.scss";
import ExPage from "../ExPage/ExPage";
import StepWizard from "react-step-wizard";

class Home extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      currentStep: 0
    };
  }

  componentDidMount() {}

  updateCounter = () => {
    console.log(this.props.currentStep);
    this.setState({
      currentStep: this.props.currentStep
    });
  };

  render() {
    return (
      <div className="home-container">
        <StepWizard nav="" onStepChange={() => this.updateCounter()}>
          <ExPage />
          <ExPage />
        </StepWizard>
      </div>
    );
  }
}

export default Home;
