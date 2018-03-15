import React, { Component } from 'react';
import './style/main.css';
import * as projectStatus from './projectStatus'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectActions from './actions/projectActions'

class ActiveProject extends Component {

  finishProject(projectID){
    this.props.actions.finishProject(projectID)
  }

  render() {
    return (
      <div id={"projects"}>
      <GetActiveProjects data = {this.props.projects} onFinishProject = {this.finishProject.bind(this)}/>
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
    <p className="start_date">Start Date: {props.date}</p>
    <p className="budget">Budget: {props.budget}</p>
    <p className="image"><img src={require('./photos/progress.png')} alt="Progress" className="progress"></img></p>
    <p className="stylist_associate">Stylist: {props.stylist} <br></br>Associate: {props.associate} </p>
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
