import React, { Component } from 'react';
import './style/main.css';
import * as projectStatus from './projectStatus'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectActions from './actions/projectActions'

class CompletedProject extends Component {

  render() {
    return (
      <div id={"projects"}>
      <GetCompletedProjects data = {this.props.projects} />
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

    // const finishProject = (event) => {
    //   props.onFinishProjectInList(event.target.value)
    // }

    return (
      <div className="active_project">
      <p className="project_name"> {props.projectName} </p>
      <p className="start_date">End Date: {props.date}</p>
      <p className="budget">Budget: {props.budget}</p>
      <p className="image"><img src={require('./photos/hair.png')} className="item" alt="item"></img>
      <img src={require('./photos/shirt.png')} className="item" alt="item"></img></p>
      <p className="stylist_associate">Stylist: {props.stylist} <br></br>Associate: {props.associate} </p>
      </div>
    )
  }

  function mapStateToProps(state, ownProps) {
    console.log(state);
    return {
      projects: state.projectReducer.projects.filter(projects => projects.status === projectStatus.COMPLETED_PROJECT)
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(projectActions, dispatch)
    };
  }
  export default connect(mapStateToProps, mapDispatchToProps)(CompletedProject);
