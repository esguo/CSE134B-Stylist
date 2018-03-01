import React, { Component } from 'react';
import './style/main.css';
import Nav from './Nav.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Project from './Project';

class CompletedProject extends Component {
  render() {
    return (
      <Router>
      <div>
      <div style={{flex:'25%', borderStyle:'solid', textAlign:'center', float: 'left'}}>
      <Nav />
      </div>
      <div style={{ flex:'75%'}}>
      <MainPage />
      </div>
      </div>
      </Router>
    );
  }
}

const MainPage = () => (
  <div>
  <h1>Completed Project</h1>
  <div id={"projects"}>
  <Project haha={123} type = {"cp"} projectID = {1234} projectName = {"New Hair"} budget = {50}
  endDate={"2/12/2018"} stylist={"Jason"} associate={"Eddie"}/>
  </div>
  </div>
);

export default CompletedProject;
