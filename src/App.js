import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Student from "./components/Student";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Student></Student>
      </div>
    );
  }
}

export default App;
