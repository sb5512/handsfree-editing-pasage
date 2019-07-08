import React, { Component } from "react";
import PropTypes from "prop-types";

import ImageLoader from "./imageLoader";
import Transcription from "../generic/transcription";
import Logdata from "../../common/logdata";
import SpellMode from "../generic/spellMode";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};

class FreeTextFormationDictate extends Component {
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
    console.log(
      "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      event.target.innerHTML
    );
    this.props.logTimeDataWhenHoveredAtWord(event.target.innerHTML);

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
          <ImageLoader {...this.props} loadedImage={this.props.loadedImage} />{" "}
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

FreeTextFormationDictate.propTypes = propTypes;

export default FreeTextFormationDictate;
