import React, { Component } from "react";
import { Link } from "react-router-dom";

import keydown from "react-keydown";

class NavBar extends Component {
  componentWillReceiveProps({ keydown }) {
    if (keydown.event) {
      console.log(keydown.event.which);
      if (keydown.event.which === 86) {
        this.props.state.history.push("/voiceonly");
      } else if (keydown.event.which === 77) {
        this.props.state.history.push("/multimodal");
      } else {
        this.props.resetTranscript();
        this.props.stopListening();
      }
    }
  }
  render() {
    let btnKoType = "btn";
    let buttonText = "";
    if (this.props.showLogData) {
      btnKoType = "btn btn-success btn-lg float-right text-center";
      buttonText = "Hide Logs";
    } else {
      btnKoType = "btn btn-danger btn-lg float-right text-center";
      buttonText = "Show Logs";
    }

    return (
      <div className="container">
        <button className={btnKoType} onClick={this.props.toggleShowLogData}>
          {buttonText}
        </button>
        <div className="row justify-content-between">
          <div tabIndex="0" className="col-6">
            <Link to="/voiceonly">
              <button
                id="voiceOnly"
                type="button"
                className="btn btn-primary btn-lg btn-block"
              >
                <h1>Voice only (v)</h1>
              </button>
            </Link>
          </div>
          <div className="col-6">
            <Link to="/multimodal">
              <button
                id="multimodal"
                type="button"
                className="btn btn-success btn-lg btn-block"
              >
                <h1>Multimodal (m)</h1>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

// export default NavBar;
export default keydown("v", "m", "V", "M", "b", "B")(NavBar);
