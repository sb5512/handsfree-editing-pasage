import React, { Component } from "react";
import PropTypes from "prop-types";
import Scriptor from "./scriptor";
import SpeechRecognition from "./speech";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};

class Dictaphone extends Component {
  onTextChange = e => {
    console.log("Text Changed");
    if (this.props.interimTranscript === "done") {
      this.props.stopListening();
    }
  };

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
    // Have to check if it is commands
    return (
      <React.Fragment>
        <div className="card">
          <Scriptor resetTranscript={resetTranscript} />
          <div className="card-body">
            <textarea
              onChange={this.onTextChange}
              className="form-control green-border-focus"
              rows="3"
              style={{ fontSize: 54 }}
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
