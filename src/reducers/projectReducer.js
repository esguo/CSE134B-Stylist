import * as types from '../actions/actionTypes'
import initialStateProject from './initialStateProject';
import * as projectStatus from '../projectStatus'
import {getTodayDate} from '../utils.js';

export default function projectReducer(state = initialStateProject, action){
  switch (action.type){

    case types.CREATE_PROJECT_SUCCESS:
      console.log("Creating a new project");
      console.log(action.project);
      console.log(state);
      var newState = Object.assign({}, state, {projects: [...state.projects, action.project]});
      console.log(newState);
    return newState

    case types.EDIT_PROJECT_SUCCESS:
      newState = Object.assign({}, state, {projects: state.projects.map(
        project => {
          if(project.projectID === action.projectID){
              var projectName = action.projectName? action.projectName: project.projectName
              var budget = action.budget ? action.budget : project.budget
              var description = action.description ? action.description : project.description

            return Object.assign({}, project, {projectName: projectName, budget: budget, description: description} )
          }
          return project
        }
      )})
      console.log(newState)
    return newState;

    case types.DELETE_PROJECT_SUCCESS:
      var projectID = action.projectID
      newState = Object.assign({}, state, {projects: state.projects.filter(project => project.projectID !== projectID)});
      console.log(newState);
    return newState

    case types.ACTIVATE_PROJECT_SUCCESS:
      newState = Object.assign({}, state, {projects: state.projects.map(
        project => {
          if(project.projectID === action.projectID){
            return Object.assign({}, project, {status: projectStatus.ACTIVE_PROJECT} )
          }
          return project
        }
      )})
      console.log(newState)
    return newState;

    case types.FINISH_PROJECT_SUCCESS:
      newState = Object.assign({}, state, {projects: state.projects.map(
        project => {
          if(project.projectID === action.projectID){
            return Object.assign({}, project, {status: projectStatus.COMPLETED_PROJECT, date: getTodayDate()} )
          }
          return project
        }
      )})
      console.log(newState)
    return newState;

    default:
      return state;
  }
}
