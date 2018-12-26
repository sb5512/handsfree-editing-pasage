import React, { Component } from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "./speech";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};

class Dictaphone extends Component {
  render() {
    const {
      transcript,
      resetTranscript,
      stopListening,
      startListening,
      browserSupportsSpeechRecognition
    } = this.props;

    if (!browserSupportsSpeechRecognition) {
      return null;
    }

    return (
      <div>
        <button onClick={startListening}>Start</button>
        <button onClick={resetTranscript}>Reset</button>
        <button onClick={stopListening}>Stop</button>
        <span>{transcript}</span>
      </div>
    );
  }
}

Dictaphone.propTypes = propTypes;

export default SpeechRecognition(Dictaphone);
