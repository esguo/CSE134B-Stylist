import React, { Component } from 'react';
import './style/main.css';
import Project from './Project';

export class CompletedProject extends Component {

  constructor(props){
    super(props);
    // var cpData = localStorage.getItem("completedProject");
    // console.log(cpData);
    // if(cpData == null | cpData === ""){
    //   this.state = {projects: []};
    // }
    // else{
    //   var s = JSON.parse(cpData);
    //   this.state = s;
    // }

    this.state = {projects : [{
    projectID :1234,
    projectName: "New Hair",
    budget : 150,
    endDate: "2/12/2018",
    stylist: "Jason",
    associate: "Eddie"
  },
  {
  projectID :1234,
  projectName: "New Hair",
  budget : 150,
  endDate: "2/12/2018",
  stylist: "Jason",
  associate: "Eddie"
}

]};
  }

  render() {
    return (
      <div id={"projects"}>
      <GetCompletedProjects data = {this.state.projects} />
      </div>
    );
  }

}

export const GetCompletedProjects = (props) => {
  console.log(props.data);
  return(
    <div>
    {props.data.map(project => < CompletedProjectBox {...project} />)}
      </div>

    )
  }

  export const CompletedProjectBox = (props) => {

    const finishProject = (event) => {
      props.onFinishProjectInList(event.target.value)
    }

    return (
      <div className="active_project">
      <p className="project_name"> {props.projectName} </p>
      <p className="start_date">End Date: {props.endDate}</p>
      <p className="budget">Budget: {props.budget}</p>
      <p className="image"><img src={require('./photos/hair.png')} className="item" alt="item image"></img>
      <img src={require('./photos/shirt.png')} className="item" alt="item image"></img></p>
      <p className="stylist_associate">Stylist: {props.stylist} <br></br>Associate: {props.associate} </p>
      </div>
    )
  }
