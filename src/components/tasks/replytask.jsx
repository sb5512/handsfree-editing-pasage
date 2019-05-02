import React, { Component } from "react";
// import Dictaphone from "../common/dictaphone";

class ReplyTask extends Component {
  render() {
    const {
      transcript,
      previousTranscript,
      resetTranscript,
      stopListening,
      startListening,
      commands,
      resetCommands,
      browserSupportsSpeechRecognition
    } = this.props;
    return (
      <div className="container-fluid">
        <span>{transcript}</span>
        {/* <Dictaphone /> */}
      </div>
    );
  }
}

export default ReplyTask;
