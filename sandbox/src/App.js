import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Jumbotron} from 'react-bootstrap';
class App extends Component {
  render() {
    return (
      <div className="App">
	<Jumbotron>
        	<div className="App-header">
          	<img src={logo} className="App-logo" alt="logo" />
          	<h2>Welcome to SandBox</h2>
        	</div>
	</Jumbotron>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
	<Button bsStyle='danger'>Danger</Button>

      </div>
    );
  }
}

export default App;
