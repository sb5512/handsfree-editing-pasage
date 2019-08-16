import React, { Component } from "react";
import ModalSession from "../tasks/generic/modalSessions";
import { CSVLink } from "react-csv";

class Logdata extends Component {
  handleClose = () => {
    // Maybe we need to turn off gaze or something
    this.props.restartTimer();
  };

  render() {
    let filename =
      "session" + this.props.sessionCounter / 5 + "-copytask-voiceonly.csv";
    if (this.props.commandTag) {
      filename =
        "session" + this.props.sessionCounter / 5 + "-copytask-commandtag.csv";
    }
    if (this.props.dwellTag) {
      filename =
        "session" + this.props.sessionCounter / 5 + "-copytask-dwelltag.csv";
    }

    let randomLogDataDownloadBtnFix =
      this.props.logData.length > 0
        ? this.props.logData[this.props.logData.length - 1].command !==
          "S_Finish"
        : true;

    return (
      <React.Fragment>
        {" "}
        {this.props.phraseQuestionImageCount < 10 ? (
          <div className="text-justify d-block p-2 bg-success">
            <b>Training in progress</b>
          </div>
        ) : (
          <React.Fragment />
        )}
        <div className="border border-white bg-secondary d-block p-2 bg-light">
          {this.props.sessionCounter - this.props.phraseQuestionImageCount ===
            0 &&
          !this.props.spellMode &&
          randomLogDataDownloadBtnFix ? (
            <ModalSession
              startListening={this.props.startListening}
              stopListening={this.props.stopListening}
              data={this.props.logDataPersist}
              filename={filename}
              historyStates={this.props.historyStates}
              sessionCounterUp={this.props.sessionCounterUp}
              restartTimer={this.props.restartTimer}
              {...this.props}
            />
          ) : (
            <React.Fragment />
          )}
          {this.props.showLogData ? (
            <React.Fragment>
              <h5>Logs {this.props.imageNumber}</h5>
              {this.props.logData
                .slice(0)
                .reverse()
                .map((sentence, index) => {
                  return <div key={index}> {sentence.text} </div>;
                })}
            </React.Fragment>
          ) : (
            <div />
          )}
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
