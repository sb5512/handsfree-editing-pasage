import React, { Component } from "react";
import CopyDictate from "./copyDictate";
import keydown from "react-keydown";
import Example from "../../common/popup";

class CopyTask extends Component {
  componentWillReceiveProps({ keydown }) {
    if (keydown.event) {
      if (keydown.event.which === 66) {
        this.props.resetTranscript();
        this.props.stopListening();
        this.props.state.history.goBack();
      }
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <CopyDictate {...this.props} />
        <Example suggestionList={["hi", "hi", "hi"]} />
      </div>
    );
  }
}

export default keydown("b", "B", "1", "2", "3")(CopyTask);
