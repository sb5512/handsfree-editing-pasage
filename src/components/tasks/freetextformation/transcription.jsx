import React, { Component } from "react";
import Autocomplete from "../../common/autocomplete";
import commandsENUM from "./commandENUM";

class Transcription extends Component {
  state = {
    clickedWord: "",
    hover: false,
    editMode: false,
    selectMode: false,
    phraseCount: 0
  };

  handleWordClick = (e, word, index) => {
    e.target.style.backgroundColor = "#F44FFF";
    this.setState({ clickedWord: `${word} at index ${index}` });
  };

  toggleHoverOn = event => {
    event.target.style.backgroundColor = "#FFFF4F";
    this.setState({ hover: true });
  };

  toggleHoverOff = event => {
    event.target.style.backgroundColor = "#FFFFFF";
    this.setState({ hover: false });
  };

  editModeFn = e => {
    this.setState({ editMode: true });
  };

  render() {
    const { transcript, hasCommand, transcriptObject, spellMode } = this.props;

    let toRenderDiv;
    if (spellMode) {
      if (hasCommand && transcript) {
        toRenderDiv = (
          <React.Fragment>
            <div>Spell mode - on</div>
            <div className="card">
              <div className="card-body">
                {transcriptObject
                  .filter((wordObj, index, array) => {
                    return wordObj.spellMode;
                  })
                  .map((wordObject, index) => {
                    return (
                      <React.Fragment key={index}>
                        <Autocomplete
                          suggestions={["Hillo", "Halo", "Hi"]}
                          text={wordObject.text}
                          showSuggestion={wordObject.showSuggestion}
                          mappingNumber={index}
                          selectMode={this.state.selectMode}
                          {...this.props}
                        />
                      </React.Fragment>
                    );
                  })}
              </div>
            </div>
          </React.Fragment>
        );
      } else {
        toRenderDiv = (
          <React.Fragment>
            <div>Spell mode - on</div>
            <div className="card">
              <div className="card-body">
                {transcriptObject
                  .filter((wordObj, index, array) => {
                    return wordObj.spellMode;
                  })
                  .map((wordObject, index) => {
                    return (
                      <React.Fragment key={index}>
                        <span
                          style={{ fontSize: 34, cursor: "pointer" }}
                          onClick={e =>
                            this.handleWordClick(e, wordObject.text, index)
                          }
                          onMouseOver={this.toggleHoverOn}
                          onMouseLeave={this.toggleHoverOff}
                        >
                          {wordObject.text}
                        </span>
                      </React.Fragment>
                    );
                  })}
              </div>
            </div>
          </React.Fragment>
        );
      }
    } else {
      if (hasCommand && transcript) {
        toRenderDiv = (
          <div className="card">
            <div className="card-body">
              {transcriptObject.map((wordObject, index) => {
                return (
                  <React.Fragment key={index}>
                    <Autocomplete
                      suggestions={["Hillo", "Halo", "Hi"]}
                      text={wordObject.text}
                      showSuggestion={wordObject.showSuggestion}
                      mappingNumber={index}
                      selectMode={this.state.selectMode}
                      {...this.props}
                    />
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        );
      } else {
        toRenderDiv = (
          <div className="card">
            <div className="card-body">
              {transcriptObject.map((wordObject, index) => {
                return (
                  <React.Fragment key={index}>
                    <span
                      style={{ fontSize: 34, cursor: "pointer" }}
                      onClick={e =>
                        this.handleWordClick(e, wordObject.text, index)
                      }
                      onMouseOver={this.toggleHoverOn}
                      onMouseLeave={this.toggleHoverOff}
                    >
                      {wordObject.text}
                    </span>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        );
      }
    }

    return toRenderDiv;
  }
}

export default Transcription;
