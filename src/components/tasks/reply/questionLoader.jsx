import React, { Component } from "react";
import getReplyQuestions from "../../../utils/replyQuestions";

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
        <h3 className="card-title">
          {getReplyQuestions()[this.state.phraseCount]}
        </h3>
      </div>
    );
  }
}

export default QuestionLoader;
