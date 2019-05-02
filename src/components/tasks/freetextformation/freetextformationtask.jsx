import React, { Component } from "react";
import Dictaphone from "../../common/dictaphone";
import FreeTextFormationDictate from "./freeTextFormationDictate";

class FreeTextFormationTask extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <FreeTextFormationDictate {...this.props} />
        </div>
      </React.Fragment>
    );
  }
}

export default FreeTextFormationTask;
