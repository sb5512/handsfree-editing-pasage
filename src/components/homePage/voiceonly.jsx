import React, { Component } from "react";
import { Link } from "react-router-dom";

import keydown from "react-keydown";
import slackENUM from "../tasks/generic/slackENUM";

class Voiceonly extends Component {
  componentWillReceiveProps({ keydown }) {
    if (keydown.event) {
      if (keydown.event.which === 49) {
        this.props.state.history.push("/copytask");
      } else if (keydown.event.which === 50) {
        this.props.state.history.push("/replytask");
      } else if (keydown.event.which === 51) {
        this.props.state.history.push("/freetextformationtask");
      } else {
        this.props.resetTranscript();
        this.props.stopListening();
        this.props.state.history.goBack();
      }
    }
  }

  pressf4ToStartStopGaze = () => {
    console.log("Called");
    fetch(slackENUM.slackUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: JSON.stringify({
        channel: "test_ob_tooling",
        text: "#f4press"
      })
    });
  };

  render() {
    return (
      <div className="container">
        <button
          className="btn btn-light btn-lg float-right text-center"
          onClick={this.pressf4ToStartStopGaze}
        >
          <i className="fa fa-microphone" />
        </button>
        <div className="row justify-content-between">
          <div className="col-4" />
          <div className="col-4">
            <Link to="/passage">
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
              >
                <h2>Passage</h2>
                <br />
                <h2>Voice only</h2>
              </button>
            </Link>
          </div>

          <div className="col-4" />
        </div>
      </div>
    );
  }
}

export default keydown("b", "B", "1", "2", "3")(Voiceonly);
// export default Voiceonly;
