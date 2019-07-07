import React, { Component } from "react";
import getPhrases from "../../../utils/phrases";

class QuestionLoader extends Component {
  state = {
    phraseCount: 1
  };

  handleNext() {
    this.setState({
      phraseCount: this.state.phraseCount + 1,
      selectMode: false
    });
  }

  render() {
    return (
      <div className="card-header text-center">
        <h3 className="card-title">{getPhrases()[this.state.phraseCount]}</h3>
      </div>
    );
  }
}

export default QuestionLoader;
