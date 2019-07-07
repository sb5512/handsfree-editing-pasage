import React, { Component } from "react";
import Autocomplete from "../../common/autocomplete";
import ClickedWord from "./clickedWord";

class Transcription extends Component {
  render() {
    const {
      transcript,
      hasCommand,
      transcriptObject,
      handleWordClick,
      toggleHoverOn,
      toggleHoverOff
    } = this.props;

    let toRenderDiv;

    // Normal mode. This is where we show regular text and also autocomplete text
    // hasCommand = map
    if (hasCommand && transcript) {
      toRenderDiv = (
        <div className="card">
          <div className="card-body">
            {transcriptObject.map((wordObject, index) => {
              return (
                <React.Fragment key={index}>
                  <Autocomplete
                    suggestions={wordObject.suggestions}
                    text={wordObject.text}
                    showSuggestion={wordObject.showSuggestion}
                    indexing={index}
                    {...this.props}
                  />
                </React.Fragment>
              );
            })}
          </div>
          <ClickedWord clickedWord={this.props.clickedWord} />
        </div>
      );
    } // This else is when no command is spoken i.e. map or spell mode is not currently happening. All normal
    else {
      toRenderDiv = (
        <div className="card">
          <div className="card-body">
            {transcriptObject.map((wordObject, index) => {
              return (
                <React.Fragment key={index}>
                  <span
                    style={{
                      fontSize: 34,
                      cursor: "pointer",
                      paddingLeft: 20
                    }}
                    onClick={e => handleWordClick(e, wordObject.text, index)}
                    onMouseOver={toggleHoverOn}
                    onMouseLeave={toggleHoverOff}
                  >
                    {wordObject.text}
                  </span>
                </React.Fragment>
              );
            })}
          </div>

          <ClickedWord clickedWord={this.props.clickedWord} />
        </div>
      );
    }

    return toRenderDiv;
  }
}

export default Transcription;
