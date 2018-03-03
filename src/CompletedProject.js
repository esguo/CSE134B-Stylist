import React, { Component } from 'react';
import './style/main.css';
import Project from './Project';

class CompletedProject extends Component {

  constructor(props){
    super(props);
    var cpData = localStorage.getItem("completedProject");
    console.log(cpData);
    if(cpData == null | cpData === ""){
      this.state = {projects: []};
    }
    else{
      var s = JSON.parse(cpData);
      this.state = s;
    }
  }

  render() {
    return (
      <div id={"projects"}>
      <GetCompletedProjects data = {this.state.projects} />
      </div>
    );
  }

}

const GetCompletedProjects = (props) => {
  console.log(props.data);
  return(
    <div>
    {props.data.map(project => < CompletedProjectBox {...project} />)}
      </div>

    )
  }

  const CompletedProjectBox = (props) => {
    console.log(props);

    const finishProject = (event) => {
      props.onFinishProjectInList(event.target.value)
    }

    return (
      <div className="active_project">
      <p className="project_name"> {props.projectName} </p>
      <p className="start_date">End Date: {props.endDate}</p>
      <p className="budget">Budget: {props.budget}</p>
      // <p class="image"> this.convertImageUrlToHtml()</p>
      <p className="stylist_associate">Stylist: {props.stylist} <br></br>Associate: {props.associate} </p>
      </div>
    )
  }


export default CompletedProject;
