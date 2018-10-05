import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Component/Sidebar';
import {Container} from "reactstrap";

class App extends Component {
  render() {
    return (
      <div className="App site">
        <Sidebar logo={logo}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Container height="100vh"></Container>
      </div>
    );
  }
}

export default App;
