import React, { Component } from 'react';
import './style/main.css';
import * as projectStatus from './projectStatus'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectActions from './actions/projectActions'

import EditProject from './EditProject';

class ActiveProject extends Component {

  finishProject(projectID){
    this.props.actions.finishProject(projectID)
  }


  togglePopup(projectID) {
    console.log("Editing " + projectID);
    this.setState({
      showPopup: !this.state.showPopup,
      editingProjectID: projectID
    });
  }

  changeProjectInfo(state){
    console.log(state)
    this.props.actions.editProject(this.state.editingProjectID, state.projectName, state.budget, state.description);
  }

  constructor(props){
    super(props);
    this.state = {
      showPopup: false,
    }
  }

  render() {
    return (
      <div id={"projects"}>
      <GetActiveProjects data = {this.props.projects} onFinishProject = {this.finishProject.bind(this)} onEditProject = {this.togglePopup.bind(this)}/>

      {this.state.showPopup ?
        <div className='popup'>
        <div className='popup_inner'>
        <EditProject
        closePopup={this.togglePopup.bind(this)}
        submitChange = {this.changeProjectInfo.bind(this)}
        type = '1'
        />
        </div>
        </div>
        : null
      }
      </div>
    );
  }

}

const GetActiveProjects = (props) => {
  console.log(props.data);
  return(
    <div>
    {props.data.map(project => < ActiveProjectBox {...project} onFinishProjectInList = {props.onFinishProject}
      onEditProject = {props.onEditProject}/>)}
    </div>

  )
}

const ActiveProjectBox = (props) => {
  console.log(props);

  const finishProject = (event) => {
    props.onFinishProjectInList(event.target.value)
  }

  const editProject = (event) => {
    props.onEditProject(event.target.value)
  }

  return (
    <div className="active_project" id={props.projectID}>
    <p className="project_name"> {props.projectName} </p>
    <br></br>
    <p classNmae="description"> Description: {props.description}</p>
    <p className="start_date">Start Date: {props.date}</p>
    <p className="budget">Budget: {props.budget}</p>
    <p className="image"><img src={require('./photos/progress.png')} alt="Progress" className="progress"></img></p>
    <p className="stylist_associate">Stylist: {props.stylist} <br></br>Associate: {props.associate} </p>
    <button onClick={editProject} value={props.projectID}>Edit Description</button>
    <button onClick={finishProject} value={props.projectID}>finish</button>
    </div>
  )
}





function mapStateToProps(state, ownProps) {
  console.log(state);
  return {
    projects: state.projectReducer.projects.filter(projects => projects.status === projectStatus.ACTIVE_PROJECT)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(projectActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ActiveProject);
