import React, { Component } from "react";

class Scriptor extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">
            Text To be read
            <i class="fa fa-microphone pull-right" aria-hidden="true" />
          </h3>
        </div>
      </div>
    );
  }
}

export default Scriptor;
