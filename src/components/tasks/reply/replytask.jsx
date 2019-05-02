import React, { Component } from "react";
import Dictaphone from "../../common/dictaphone";
import ReplyDictate from "./replyDictate";

class ReplyTask extends Component {
  render() {
    return (
      <div className="container-fluid">
        <ReplyDictate />
      </div>
    );
  }
}

export default ReplyTask;
