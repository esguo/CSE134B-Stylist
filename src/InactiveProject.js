import React, { Component } from 'react';
import './style/main.css';
import Project from './Project';

class InactiveProject extends Component {
  render() {
    return (
      <div id={"projects"}>
      <Project haha={123} type = {"ip"} projectID = {1234} projectName = {"New Hair"} budget = {50} />
      </div>
    );
  }
}
export default InactiveProject;
