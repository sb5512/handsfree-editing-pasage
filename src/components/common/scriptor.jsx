import React, { Component } from "react";
import ImportFromFileBodyComponent from "../../utils/filereader.jsx";

class Scriptor extends Component {
  state = {};
  render() {
    return (
      <div className="card-header">
        <h3 className="card-title">
          <ImportFromFileBodyComponent
            resetTranscript={this.props.resetTranscript}
          />
          <i className="fa fa-microphone pull-right" aria-hidden="true" />
        </h3>
      </div>
    );
  }
}

export default Scriptor;
