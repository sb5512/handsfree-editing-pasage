import React, { Component } from "react";
import getReplyQuestions from "../../../utils/replyQuestions";

class QuestionLoader extends Component {
  render() {
    return (
      <div className="card-header text-center">
        <h3 className="card-title">
          {getReplyQuestions(this.props.phraseQuestionImageCount)}
        </h3>
      </div>
    );
  }
}

export default QuestionLoader;
