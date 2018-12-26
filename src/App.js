import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import Navbar from "./components/navbar";
import Dictaphone from "./components/common/try";
import Scriptor from "./components/common/scriptor";

class App extends Component {
  render() {
    return (
      <main className="container">
        {/* <Navbar /> */}
        {/* <Movies /> */}
        <h1>Welcome to dictation</h1>
        <Scriptor />
        <Dictaphone />
      </main>
    );
  }
}

export default App;
