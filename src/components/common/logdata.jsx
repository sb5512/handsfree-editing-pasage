import React, { Component } from "react";
import ModalSession from "../tasks/generic/modalSessions";

class Logdata extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {" "}
        <div className="border border-white bg-secondary d-block p-2 bg-light">
          <ModalSession data={this.props.logDataPersist} />
          <h5>Logs</h5> <hr />
          {this.props.logData
            .slice(0)
            .reverse()
            .map((sentence, index) => {
              return <div key={index}> {sentence.text} </div>;
            })}
        </div>
      </React.Fragment>
      // or
      // <CSVDownload data={csvData} target="_blank" />;
    );
  }
}

export default Logdata;
