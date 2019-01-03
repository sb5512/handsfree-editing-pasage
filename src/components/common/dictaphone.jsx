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
  state = { clickedWord: "" };

  handleWordClick = (word, index) => {
    console.log("Word clicked ", word, "at index ", index);
    this.setState({ clickedWord: `${word} at index ${index}` });
  };

  handleClickedWord = () => {
    console.log("ok");
  };

  render() {
    const {
      transcript,
      resetTranscript,
      stopListening,
      startListening,
      commands,
      resetCommands,
      browserSupportsSpeechRecognition
    } = this.props;

    if (!browserSupportsSpeechRecognition) {
      return null;
    }
    // Have to check if it is commands
    const transcriptArr = transcript.split(/(\s+)/);
    return (
      <React.Fragment>
        <div className="card">
          <Scriptor
            resetTranscript={resetTranscript}
            commands={commands}
            resetCommands={resetCommands}
          />
          <div className="card-body">
            {transcript &&
              transcriptArr.map((word, index) => {
                return (
                  <React.Fragment key={index}>
                    <span
                      className="border border-primary m-4"
                      onClick={() => this.handleWordClick(word, index)}
                      style={{ fontSize: 54, cursor: "pointer" }}
                    >
                      {word}
                    </span>
                  </React.Fragment>
                );
              })}
          </div>
        </div>

        <div className="border border-white d-block p-2 bg-dark text-white">
          You clicked on the word:{" "}
          <span className="border border-primary">
            {"  "} {this.state.clickedWord}
          </span>
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
