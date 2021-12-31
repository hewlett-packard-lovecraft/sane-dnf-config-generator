import React from "react";
import Container from "react-bootstrap/Container";

import "./App.css";
import Main from "./Components/Main"

const App = () => {
  return (
    <Container className="App">
        <div className="mt-4 p-5 bg-light text-dark rounded">
          <h1> Sane dnf.conf Generator</h1>
          <p>Generate a dnf.conf with reasonable defaults</p>
        </div>
        <br/>
      <Main />
    </Container>
  );
};

export default App;
