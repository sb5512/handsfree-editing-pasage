import React, { Component } from "react";
import ModalSession from "../tasks/generic/modalSessions";

class Logdata extends Component {
  state = { sessionCounter: 5 };

  sessionCounterUp = () => {
    this.setState({ sessionCounter: this.state.sessionCounter + 5 });
  };

  render() {
    let filename =
      "session" +
      this.props.phraseQuestionImageCount / this.state.sessionCounter +
      "logdata.csv";
    return (
      <React.Fragment>
        {" "}
        <div className="border border-white bg-secondary d-block p-2 bg-light">
          {this.state.sessionCounter - this.props.phraseQuestionImageCount ===
          0 ? (
            <ModalSession
              startListening={this.props.startListening}
              stopListening={this.props.stopListening}
              data={this.props.logDataPersist}
              filename={filename}
              historyStates={this.props.historyStates}
              sessionCounterUp={this.sessionCounterUp}
            />
          ) : (
            <React.Fragment />
          )}
          <h5>Logs {this.props.phraseQuestionImageCount}</h5> <hr />
          {this.props.logData
            .slice(0)
            .reverse()
            .map((sentence, index) => {
              return <div key={index}> {sentence.text} </div>;
            })}
        </div>
      </React.Fragment>
    );
  }
}

export default Logdata;
