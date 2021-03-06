import React, { Component } from "react";
import PropTypes from "prop-types";

import Transcription from "../generic/transcription";
import Logdata from "../../common/logdata";
import SpellMode from "../generic/spellMode";
import PhraseLoader from "./phraseLoader";
import { Container } from "react-bootstrap";
import slackENUM from "../generic/slackENUM";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};

class PassageDictate extends Component {
  state = {
    clickedWord: "",
    hover: false,
    timeoutId: null,
    sessionCounter: 3
  };

  sessionCounterUp = () => {
    this.setState({ sessionCounter: this.state.sessionCounter + 3 });
  };

  handleWordClick = (e, word, index) => {
    // Have to make sure if not an error word then dont click.
    if (
      this.props.passageObject.errorWords.includes(word) ||
      this.props.spellMode
    ) {
      e.target.style.backgroundColor = "#F44FFF";
      this.setState({ clickedWord: `${word} at index ${index + 1}` });
      this.props.handleWordClickToGetToMappingWithNumberState(index + 1, word);
      fetch(slackENUM.slackUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: JSON.stringify({
          channel: "test_ob_tooling",
          text: "#clickmouse"
        })
      });
    }
  };

  toggleHoverOn = event => {
    if (this.props.commandTag && !this.props.dwellTag) {
      event.target.style.backgroundColor = "#FFFF4F";
      this.props.setHoveredOnWord(event.target.innerHTML);
    } else if (!this.props.commandTag && this.props.dwellTag) {
      event.target.style.backgroundColor = "#FFFF4F";
      if (
        this.props.passageObject.errorWords.includes(event.target.innerHTML) ||
        this.props.spellMode
      ) {
        console.log("ONLY NOWWWWWWWWWWWWWW CLICKKK MAN");

        if (!this.state.timeoutId) {
          let timeoutId = window.setTimeout(() => {
            this.setState({ timeoutId: null }); // EDIT: added this line
            console.log("YAYYYYYYYYYYYYY 1 seconds");
            fetch(slackENUM.slackUrl, {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              body: JSON.stringify({
                channel: "test_ob_tooling",
                text: "#clickmouse"
              })
            });
          }, this.props.dwellTiming);
          this.setState({ timeoutId: timeoutId });
        }
      }
    } else {
      // TODO maybe we can send a message where a mouse cursor gets hidden
    }

    this.props.logTimeDataWhenHoveredAtWord(event.target.innerHTML);

    this.setState({ hover: true });
  };

  toggleHoverOff = event => {
    event.target.style.backgroundColor = "#FFFFFF";
    this.props.setHoveredOnWord("");
    if (this.state.timeoutId) {
      window.clearTimeout(this.state.timeoutId);
      this.setState({ timeoutId: null });
    }
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
          <div className="container">
            <SpellMode
              handleWordClick={this.handleWordClick}
              toggleHoverOn={this.toggleHoverOn}
              toggleHoverOff={this.toggleHoverOff}
              {...this.props}
              sessionCounter={this.state.sessionCounter}
              sessionCounterUp={this.sessionCounterUp}
            />
            <Logdata
              logDataPersist={this.props.logDataPersist}
              logData={this.props.logData}
              phraseQuestionImageCount={this.props.phraseQuestionImageCount}
              stopListening={this.props.stopListening}
              startListening={this.props.startListening}
              historyStates={this.props.state}
              restartTimer={this.props.restartTimer}
              {...this.props}
              sessionCounter={this.state.sessionCounter}
              sessionCounterUp={this.sessionCounterUp}
            />
          </div>
        </React.Fragment>
      );
    } else {
      renderDiv = (
        <React.Fragment>
          <div className="container">
            {/* <PhraseLoader
              {...this.props}
              loadedImage={this.props.loadedImage}
            />{" "} */}
            <Transcription
              handleWordClick={this.handleWordClick}
              toggleHoverOn={this.toggleHoverOn}
              toggleHoverOff={this.toggleHoverOff}
              clickedWord={this.state.clickedWord}
              {...this.props}
            />
            <Logdata
              logDataPersist={this.props.logDataPersist}
              logData={this.props.logData}
              phraseQuestionImageCount={this.props.phraseQuestionImageCount}
              stopListening={this.props.stopListening}
              startListening={this.props.startListening}
              historyStates={this.props.state}
              restartTimer={this.props.restartTimer}
              {...this.props}
              sessionCounter={this.state.sessionCounter}
              sessionCounterUp={this.sessionCounterUp}
            />
          </div>
        </React.Fragment>
      );
    }

    return renderDiv;
  }
}

PassageDictate.propTypes = propTypes;

export default PassageDictate;
