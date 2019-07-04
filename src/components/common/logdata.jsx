import React, { Component } from "react";

class Logdata extends Component {
  state = {};
  render() {
    return (
      <div className="border border-white bg-secondary d-block p-2 bg-light">
        <h5>Logs</h5>
        <hr />
        {this.props.logdata
          .slice(0)
          .reverse()
          .map(sentence => {
            return <div> {sentence} </div>;
          })}
      </div>
    );
  }
}

export default Logdata;
