import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import Navbar from "./components/navbar";
import Dictaphone from "./components/common/try";

class App extends Component {
  render() {
    return (
      <main className="container ">
        {/* <Navbar /> */}
        {/* <Movies /> */}
        <h1>Handsfree editing- Gaze and Voice</h1>

        <Dictaphone />
      </main>
    );
  }
}

export default App;
