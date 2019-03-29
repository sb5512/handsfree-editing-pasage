import React, { Component } from "react";
import Autocomplete from "./autocomplete";

class Sugestion extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Autocomplete suggestions={["Alligator", "Bask", "Crocodilian"]} />
        <span className="m-2">space</span>
        <Autocomplete suggestions={["Alligator", "Bask", "Crocodilian"]} />
      </React.Fragment>
    );
  }
}

export default Sugestion;
