import React, { Component } from "react";
import "./App.css";
import Dictaphone from "./components/common/dictaphone";

class App extends Component {
  render() {
    return (
      <main className="container ">
        {/* <Navbar /> */}
        {/* <Movies /> */}
        <h2>Handsfree editing- Gaze and Voice</h2>

        <Dictaphone />
      </main>
    );
  }
}

export default App;
