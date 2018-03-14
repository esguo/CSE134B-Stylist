import React, { Component } from 'react';
import EditProject from './EditProject';
import './style/main.css';
import {getTodayDate } from './utils.js';
import * as projectStatus from './projectStatus'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectActions from './actions/projectActions'

class InactiveProject extends Component {



  togglePopup(projectID) {
    console.log("Editing " + projectID);
    this.setState({
      showPopup: !this.state.showPopup,
      editingProjectID: projectID
    });
  }
  deleteInacticeProject = (projectID) => {
    console.log(projectID);
    this.props.actions.deleteProject(projectID)
  }
  changeProjectInfo(projectID){
    this.props.actions.editProject(projectID);
  }

  activateProject(projectID){
    console.log(projectID);
    this.props.actions.activateProject(projectID);
  }


  constructor(props){
    super(props);
    this.state = {
      showPopup: false,
    }
  }


  render() {
    console.log(this.props.projects);
    return (
      <div id={"projects"}>
      <GetInactiveProjects data = {this.props.projects} onDeleteInactiveProject = {this.deleteInacticeProject}
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

const GetInactiveProjects = (props) => {
  console.log(props.data);
  return(
    <div>
    {props.data.map(project => < InactiveProjectBox {...project} onDeleteInactiveProjectList = {props.onDeleteInactiveProject}
      onEditInactiveProjectList = {props.onEditInactiveProject} onActivateInactiveProjectList = {props.onActivateProject}/>)}
      </div>

    )
  }

  const InactiveProjectBox = (props) => {
    console.log(props);
    const deleteProject = (event) =>{
      console.log("Going to remove project:" + props.projectID);
      props.onDeleteInactiveProjectList(props.projectID);
    }

    const editProject = (event) => {
      console.log(event);
      props.onEditInactiveProjectList(event.target.value);
    }

    const activateProject = (event) => {
      console.log(event.target.value);
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

  function mapStateToProps(state, ownProps) {
    console.log(state);
    return {
      projects: state.projects.filter(projects => projects.status == projectStatus.INACTIVE_PROJECT)
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(projectActions, dispatch)
    };
  }
export default connect(mapStateToProps, mapDispatchToProps)(InactiveProject);
