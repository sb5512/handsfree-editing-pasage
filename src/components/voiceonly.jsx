import React, { Component } from "react";
import { Link } from "react-router-dom";

import keydown from "react-keydown";

class Voiceonly extends Component {
  render() {
    return (
      <div className="container">
        <button className="btn btn-light btn-lg float-right text-center">
          <i className="fa fa-microphone" />
        </button>
        <div className="row justify-content-between">
          <div className="col-4">
            <Link to="/copytask">
              <button
                onClick={this.props.startListening}
                type="button"
                className="btn btn-primary btn-lg btn-block"
              >
                <h2>Copy Task</h2>
                <br />
                <h1>1</h1>
              </button>
            </Link>
          </div>
          <div className="col-4">
            <Link to="/replytask">
              <button
                onClick={this.props.startListening}
                type="button"
                className="btn btn-primary btn-lg btn-block"
              >
                <h2>Reply Task </h2>
                <br />
                <h1>2</h1>
              </button>
            </Link>
          </div>
          <div className="col-4">
            <Link to="/freetextformationtask">
              <button
                onClick={this.props.startListening}
                type="button"
                className="btn btn-primary btn-lg btn-block"
              >
                <h2>Free Text Formation </h2>
                <br />
                <h1>3</h1>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default keydown("b", "B", "1", "2", "3")(Voiceonly);
// export default Voiceonly;
