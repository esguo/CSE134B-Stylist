import React, { Component } from 'react';
import './style/main.css';
import Project from './Project';
import {getTodayDate } from './utils.js';

class ActiveProject extends Component {

  finishProject(projectID){
    console.log(projectID);

    var cp = JSON.parse(localStorage.getItem("completedProject"));
    console.log(cp);
    console.log(this.state);
    var data = this.state.projects;
    for(var i = 0; i < data.length; i++){
      if(data[i].projectID == projectID){
        if(cp == null) cp = {projects: []};
        var temp = data[i];
        console.log(temp);
        temp.endDate = getTodayDate();
        console.log(temp);
        cp.projects.push(temp);
        data.splice(i,1);
      }
    }

    localStorage.setItem("completedProject", JSON.stringify(cp));

    localStorage.setItem("activeProject", data);
    this.setState({projects: data});

  }

  constructor(props){
    super(props);
    var apData = localStorage.getItem("activeProject");
    console.log(apData);
    if(apData == null | apData === ""){
      this.state = {projects: []};
    }
    else{
      var s = JSON.parse(apData);
      this.state = s;

    }

    console.log(s);

    console.log(this.state);
  }
  render() {
    return (
      <div id={"projects"}>
      <GetActiveProjects data = {this.state.projects} onFinishProject = {this.finishProject.bind(this)}/>
      </div>
    );
  }

}

const GetActiveProjects = (props) => {
  console.log(props.data);
  return(
    <div>
    {props.data.map(project => < ActiveProjectBox {...project} onFinishProjectInList = {props.onFinishProject}/>)}
      </div>

    )
  }

  const ActiveProjectBox = (props) => {
    console.log(props);

    const finishProject = (event) => {
      props.onFinishProjectInList(event.target.value)
    }

    return (
      <div className="active_project" id={props.projectID}>
      <p className="project_name"> {props.projectName} </p>
      <p className="start_date">Start Date: {props.endDate}</p>
      <p className="budget">Budget: {props.budget}</p>
      <p className="image"><img src={require('./photos/progress.png')} alt="Progress Image" className="progress"></img></p>
      <p className="stylist_associate">Stylist: {props.stylist} <br></br>Associate: {props.associate} </p>
      <button onClick={finishProject} value={props.projectID}>finish</button>
      </div>
    )
  }







export default ActiveProject;
