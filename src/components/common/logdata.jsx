import React, { Component } from "react";
import ModalSession from "../tasks/generic/modalSessions";
import { CSVLink } from "react-csv";

class Logdata extends Component {
  state = { sessionCounter: 5 };

  sessionCounterUp = () => {
    this.setState({ sessionCounter: this.state.sessionCounter + 5 });
  };

  handleClose = () => {
    // Maybe we need to turn off gaze or something
  };

  render() {
    let filename =
      "session" +
      this.state.sessionCounter -
      this.props.phraseQuestionImageCount +
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
        <div>
          <CSVLink
            filename={filename}
            className="btn btn-primary float-right"
            target="_blank"
            onClick={this.handleClose}
            data={this.props.logDataPersist}
            headers={[
              { label: "Command", key: "command" },
              { label: "Time", key: "time" },
              { label: "Text", key: "textForLog" }
            ]}
          >
            Download log data
          </CSVLink>
        </div>
      </React.Fragment>
    );
  }
}

export default Logdata;
