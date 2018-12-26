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
      <React.Fragment>
        <div className="card">
          <div className="card-body">
            <textarea
              className="form-control green-border-focus"
              style={{ fontSize: 54 }}
              rows="3"
              value={transcript}
            />
          </div>
        </div>

        <button className="btn btn-primary" onClick={startListening}>
          Start
        </button>
        <button className="btn btn-warning m-2" onClick={resetTranscript}>
          Reset
        </button>
        <button className="btn btn-danger " onClick={stopListening}>
          Stop
        </button>
      </React.Fragment>
    );
  }
}

Dictaphone.propTypes = propTypes;

export default SpeechRecognition(Dictaphone);
