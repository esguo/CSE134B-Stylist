import React, { Component } from 'react';
import './style/main.css';
import Project from './Project';

class CompletedProject extends Component {
  render() {
    return (
      <div id={"projects"}>
      <Project haha={123} type = {"cp"} projectID = {1234} projectName = {"New Hair"} budget = {50}
      endDate={"2/12/2018"} stylist={"Jason"} associate={"Eddie"}/>
      </div>
    );
  }
}
export default CompletedProject;
