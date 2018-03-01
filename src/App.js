import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div style={{flex:'25%', borderStyle:'solid', textAlign:'center', float: 'left'}}>
            <Nav />
          </div>
          <div style={{ flex:'75%'}}>
            <h1>hiii</h1>
            <hr />
            <Link to="/">newpage</Link>
            <Link to="A">newpage</Link>
            <Route path="/" component={About} />
            <Route path="/A" component={Home}/>
          </div>
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);
const About = () => (
  <div>
    <h2>About HI STUFF GOES HERE</h2>
  </div>
);

export default App;
