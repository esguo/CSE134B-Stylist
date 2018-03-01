import React, { Component } from 'react';
import './style/main.css';
import Project from './Project';

class ActiveProject extends Component {
  render() {
    return (
      <div id={"projects"}>
      <Project haha={123} type = {"ap"} projectID = {1234} projectName = {"New Hair"}
      budget = {50} endDate={"2/28/2018"} progressUrl={"something"} stylist={"Jason"} associate={"Eddie"}/>
      </div>
    );
  }
}

export default ActiveProject;
