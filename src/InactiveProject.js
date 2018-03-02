import React, { Component } from 'react';
import './style/main.css';

class InactiveProject extends Component {
  state = {projects : [{
    type: "ip",
    projectID :1234,
    projectName: "New Hair",
    budget : 150
  }]};

  deleteInacticeProject = (projectID) => {
   console.log(data);
   var data = this.state.projects;
   for(var i = 0; i < data.length; i++){
     if(data[i].projectID == projectID){
       console.log(data);
       data.splice(i,1);
       console.log(data);
     }
   }
   this.setState({projects: data});
   console.log(this.state);
  }

  render() {
    return (
      <div id={"projects"}>
      <GetInactiveProjects data = {this.state.projects} onDeleteInactiveProject = {this.deleteInacticeProject}/>
      </div>
    );
  }
}

const GetInactiveProjects = (props) => {
  console.log(props.data);
  return(
    <div>
      {props.data.map(project => < InactiveProjectBox {...project} onDeleteInactiveProjectList = {props.onDeleteInactiveProject}/>)}
    </div>

  )
}

const InactiveProjectBox = (props) => {
  console.log(props);
  const f = (event) =>{
    console.log("Going to remove project:" + props.projectID);
    props.onDeleteInactiveProjectList(event.target.value);
  }
  return (
    <div className="active_project">
    <p className="project_name"> {props.projectName} </p>
    <p className="budget">Budget: {props.budget}</p>
    <p className="find_stylist">Find Your Personal Stylist</p>
    <button onClick={f} value={props.projectID}>Delete</button>
    </div>
  )
}

export default InactiveProject;
