import React, { Component } from "react";
import Autocomplete from "../../common/autocomplete";
import ClickedWord from "./clickedWord";

class Transcription extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.transcriptObject !== nextProps.transcriptObject) {
      // Let us check if the wordObject has the longest word
      const filteredTranscribedObject = this.props.transcriptObject.filter(
        wordObject => {
          return (
            this.props.suggestionList[wordObject.text] &&
            this.props.suggestionList[wordObject.text].length > 0
          );
        }
      );
      // let longestObj;
      // if (filteredTranscribedObject.length > 0) {
      //   longestObj = filteredTranscribedObject.reduce(function(a, b) {
      //     return a.text.length > b.text.length ? a : b;
      //   });

      //   console.log(
      //     "THE LONGEST WORD IN THIS TRANSCRIPTION SECTION IS",
      //     longestObj
      //   );
      // }
      this.props.transcriptObject.map((wordObject, index) => {
        // if (
        //   this.props.suggestionList[wordObject.text] &&
        //   longestObj &&
        //   wordObject.text === longestObj.text
        // ) {
        //   this.props.setInducedError(wordObject.text);
        // }
        if (
          !this.props.suggestionList[wordObject.text] &&
          wordObject.showcurly
        ) {
          console.log(
            "No Suggestion stored in dictionary for word: ",
            wordObject.text
          );
          console.log("Fetching....................");
          fetch(`https://api.datamuse.com//words?sl=${wordObject.text}&max=6`)
            .then(res => res.json())
            .then(data => {
              let answer = data.map(el => el.word);
              // remove the first suggestion as it is always what the word was sent as
              answer.shift();
              console.log("Fetched information are: ", data);
              this.props.setSuggestionList(wordObject.text, answer, false);
              // this.setState({ suggestions: answer });
            })
            .catch //this.setState({ suggestions: ["Loading..."] })
            ();
        }
      });
    }
  }

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
    let curlyUnderline = "curlyUnderline curlyUnderlineInner";

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
                    suggestions={this.props.suggestionList[wordObject.text]}
                    text={wordObject.text}
                    showSuggestion={wordObject.showSuggestion}
                    indexing={index}
                    fakeIndexing={wordObject.fakeIndex}
                    {...this.props}
                    showcurlyI={wordObject.showcurly}
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
                    className={wordObject.showcurly ? curlyUnderline : ""}
                    style={{
                      fontSize: 34,
                      cursor: "pointer",
                      paddingLeft: 18,
                      paddingRight: 18,
                      paddingTop: 4,
                      paddingBottom: 0,
                      marginBottom: "10px"
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
