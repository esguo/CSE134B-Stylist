import React, { Component } from 'react';
import './style/main.css';
import Project from './Project';

class CompletedProject extends Component {
  state = {projects : [{
    type: "cp",
    projectID :1234,
    projectName: "New Hair",
    budget : 150,
    endDate: "2/12/2018",
    stylist: "Jason",
    associate: "Eddie"
  }]};
  render() {
    return (
      <div id={"projects"}>
      <Project haha={123} type = {"cp"} projectID = {1234} projectName = {"New Hair"} budget = {50}
      endDate={"2/12/2018"} stylist={"Jason"} associate={"Eddie"}/>
            <GetCompletedProjects data = {this.state.projects}/>
      </div>
    );
  }
}

function GetCompletedProjects(props){
  console.log(props.data);
  return(
    <div>
      {props.data.map(project => < Project {...project} />)}
    </div>

  )
}


export default CompletedProject;
