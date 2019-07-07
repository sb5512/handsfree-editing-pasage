import React, { Component } from "react";

class ClickedWord extends Component {
  render() {
    return (
      <div className="border border-white d-block p-2 bg-dark text-white">
        You clicked on the word:{" "}
        <span className="border border-primary">
          {"  "} {this.props.clickedWord}
        </span>
      </div>
    );
  }
}

export default ClickedWord;
