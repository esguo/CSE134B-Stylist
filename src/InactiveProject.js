import React, { Component } from 'react';
import EditProject from './EditProject';
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

  editInactiveProject = (projectID) => {
    console.log(projectID);
  }

  togglePopup(projectID) {
    console.log("Editing " + projectID);
    this.setState({
      showPopup: !this.state.showPopup,
      editingProjectID: projectID
    });
  }

  changeProjectInfo(state){
    console.log("Going to change the state");
    console.log(state);

    var data = this.state.projects;
    var pID = this.state.editingProjectID;
    for(var i = 0; i < data.length; i++){
      if(data[i].projectID == pID){
        console.log(data[i]);
        data[i].projectName = state.projectName;
        data[i].budget = state.budget;
        console.log(data[i]);
      }
    }
    this.setState({projects: data});
  }

  render() {
    return (
      <div id={"projects"}>
      <GetInactiveProjects data = {this.state.projects} onDeleteInactiveProject = {this.deleteInacticeProject}
      onEditInactiveProject = {this.togglePopup.bind(this)}/>

      {this.state.showPopup ?
        <div className='popup'>
        <div className='popup_inner'>
        <EditProject
        closePopup={this.togglePopup.bind(this)}
        submitChange = {this.changeProjectInfo.bind(this)}
        />
        </div>
        </div>
        : null
      }

      </div>
    );
  }
}

const GetInactiveProjects = (props) => {
  console.log(props.data);
  return(
    <div>
    {props.data.map(project => < InactiveProjectBox {...project} onDeleteInactiveProjectList = {props.onDeleteInactiveProject}
      onEditInactiveProjectList = {props.onEditInactiveProject} />)}
      </div>

    )
  }

  const InactiveProjectBox = (props) => {
    console.log(props);
    const deleteProject = (event) =>{
      console.log("Going to remove project:" + props.projectID);
      props.onDeleteInactiveProjectList(event.target.value);
    }

    const editProject = (event) => {
      console.log(event);
      props.onEditInactiveProjectList(event.target.value);
    }


    return (
      <div className="active_project">
      <p className="project_name"> {props.projectName} </p>
      <p className="budget">Budget: {props.budget}</p>
      <p className="find_stylist">Find Your Personal Stylist</p>
      <button onClick={deleteProject} value={props.projectID}>Delete</button>
      <button onClick={editProject} value={props.projectID}>Edit</button>
      </div>
    )
  }

  export default InactiveProject;
