import React, { Component } from 'react';
import EditProject from './EditProject';
import './style/main.css';
import {getTodayDate } from './utils.js';

export class InactiveProject extends Component {


  deleteInacticeProject = (projectID) => {
    var data = this.state.projects;
    console.log(data);
    for(var i = 0; i < data.length; i++){
      if(data[i].projectID == projectID){
        console.log(data);
        data.splice(i,1);
        console.log(data);
      }
    }
    this.setState({projects: data});
    // localStorage.setItem("inactiveProject", JSON.stringify(this.state));
    console.log(this.state);
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
    this.setState({showPopup: false, projects: data});
    // localStorage.setItem("inactiveProject", JSON.stringify(this.state));
  }

  activateProject(projectID){
    console.log(projectID);
    var temp;
    // var temp = localStorage.getItem("activeProject");
    var ap;
    console.log(temp);
    if(temp == null | temp === ""){
      ap = {projects: []};
    }
    else{
      ap = JSON.parse(temp);
    }

    console.log(ap);
    var data = this.state.projects;
    for(var i = 0; i < data.length; i++){
      if(data[i].projectID == projectID){
        console.log(ap);
        if(ap == null) ap = {projects: []};
        var temp = data[i];
        console.log(temp);
        temp.stylist = "Eddie";
        temp.associate = "Jason";
        temp.endDate = getTodayDate();
        console.log(temp);
        ap.projects.push(temp);
      }
    }
    console.log("Storing proejct into activeProject");
    console.log(ap);
    // localStorage.setItem("activeProject", JSON.stringify(ap));

    this.deleteInacticeProject(projectID);
  }


  constructor(props){
    super(props);

    var ipData ;
    // = localStorage.getItem("inactiveProject");

    // if(ipData == null | ipData === ""){
    //   this.state = {projects: [],
    //     showPopup: false,
    //   editingProjectID: ""
    // };
    // }
    // else{
    //   console.log(ipData);
    //   this.state = JSON.parse(ipData);
    //   this.state.showPopup = false;
    // }
    this.state = {projects: [{projectID :1234,
      projectName: "New Hair",
      budget : 150}]}
    }


    render() {
      return (
        <div id={"projects"}>
        <GetInactiveProjects data = {this.state.projects} onDeleteInactiveProject = {this.deleteInacticeProject}
        onEditInactiveProject = {this.togglePopup.bind(this)} onActivateProject = {this.activateProject.bind(this)}/>

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

  export const GetInactiveProjects = (props) => {
    console.log(props.data);
    return(
      <div>
        {props.data.map(project => < InactiveProjectBox {...project} onDeleteInactiveProjectList = {props.onDeleteInactiveProject}
          onEditInactiveProjectList = {props.onEditInactiveProject} onActivateInactiveProjectList = {props.onActivateProject}/>)}
        </div>

      )
    }

    export const InactiveProjectBox = (props) => {
      const deleteProject = (event) =>{
        console.log("Going to remove project:" + props.projectID);
        props.onDeleteInactiveProjectList(event.target.value);
      }

      const editProject = (event) => {
        console.log(event);
        props.onEditInactiveProjectList(event.target.value);
      }

      const activateProject = (event) => {
        console.log(event);
        props.onActivateInactiveProjectList(event.target.value);
      }


      return (
        <div className="active_project">
          <p className="project_name"> {props.projectName} </p>
          <p className="budget">Budget: {props.budget}</p>
          <p className="find_stylist">Find Your Personal Stylist</p>
          <button onClick={deleteProject} value={props.projectID}>Delete</button>
          <button onClick={editProject} value={props.projectID}>Edit</button>
          <button onClick={activateProject} value={props.projectID}>Make It Active</button>
        </div>
      )
    }

export default InactiveProject;
