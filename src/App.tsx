import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

import "./App.css";
import Main from "./Components/Main"

const App: React.FC = () => {
  return (
    <Container className="App">
      <Jumbotron fluid>
        <div className="center">
          <h1 className="header"> Sane dnf.conf Generator</h1>
          <p>Generate a dnf.conf with reasonable defaults</p>
        </div>
      </Jumbotron>

      <Main />
    </Container>
  );
};

export default App;
