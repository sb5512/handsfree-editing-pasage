import React, { Component } from "react";
import ModalSession from "../tasks/generic/modalSessions";

class LogdataImageTask extends Component {
  state = { sessionCounter: 1 };

  sessionCounterUp = () => {
    this.setState({ sessionCounter: this.state.sessionCounter + 1 });
  };
  render() {
    let filename =
      "session" +
      this.props.imageNumber / this.state.sessionCounter +
      "logdata.csv";
    return (
      <React.Fragment>
        {" "}
        <div className="border border-white bg-secondary d-block p-2 bg-light">
          {this.state.sessionCounter - this.props.imageNumber === 0 ? (
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
          <h5>Logs {this.props.imageNumber}</h5> <hr />
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

export default LogdataImageTask;
