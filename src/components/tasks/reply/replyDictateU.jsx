import React, { Component } from "react";
import PropTypes from "prop-types";

import Transcription from "../generic/transcription";
import Logdata from "../../common/logdata";
import SpellMode from "../generic/spellMode";
import QuestionLoader from "./questionLoader";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};

class ReplyDictate extends Component {
  state = {
    clickedWord: "",
    hover: false
  };

  handleWordClick = (e, word, index) => {
    e.target.style.backgroundColor = "#F44FFF";
    this.setState({ clickedWord: `${word} at index ${index + 1}` });
  };

  toggleHoverOn = event => {
    event.target.style.backgroundColor = "#FFFF4F";
    this.setState({ hover: true });
  };

  toggleHoverOff = event => {
    event.target.style.backgroundColor = "#FFFFFF";
    this.setState({ hover: false });
  };

  render() {
    const { browserSupportsSpeechRecognition } = this.props;

    if (!browserSupportsSpeechRecognition) {
      return null;
    }

    let renderDiv;

    if (this.props.spellMode) {
      renderDiv = (
        <React.Fragment>
          {/* <Transcription {...this.props} />; */}
          <SpellMode
            handleWordClick={this.handleWordClick}
            toggleHoverOn={this.toggleHoverOn}
            toggleHoverOff={this.toggleHoverOff}
            {...this.props}
          />
          <Logdata logdata={this.props.logData} />
        </React.Fragment>
      );
    } else {
      renderDiv = (
        <React.Fragment>
          <QuestionLoader
            {...this.props}
            loadedImage={this.props.loadedImage}
          />{" "}
          <Transcription
            handleWordClick={this.handleWordClick}
            toggleHoverOn={this.toggleHoverOn}
            toggleHoverOff={this.toggleHoverOff}
            clickedWord={this.state.clickedWord}
            {...this.props}
          />
          <Logdata logdata={this.props.logData} />
        </React.Fragment>
      );
    }

    return renderDiv;
  }
}

ReplyDictate.propTypes = propTypes;

export default ReplyDictate;
