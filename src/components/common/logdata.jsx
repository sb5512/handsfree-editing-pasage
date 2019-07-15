import React, { Component } from "react";
import { CSVLink } from "react-csv";

class Logdata extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {" "}
        <div className="border border-white bg-secondary d-block p-2 bg-light">
          <CSVLink
            filename={"logdata.csv"}
            className="btn btn-primary float-right"
            target="_blank"
            data={this.props.logDataPersist}
            headers={[
              { label: "Command", key: "command" },
              { label: "Time", key: "time" },
              { label: "Text", key: "text" }
            ]}
          >
            Download log data
          </CSVLink>
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
