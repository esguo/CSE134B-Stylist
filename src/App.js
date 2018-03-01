import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js';

class App extends Component {
  render() {
    return (
      <div>
        <div style={{flex:'25%', borderStyle:'solid', textAlign:'center', float: 'left'}}>
          <Nav />
        </div>
        <div style={{ flex:'75%'}}>
          <h1>COL2</h1>
        </div>
      </div>
    );
  }
}

export default App;
