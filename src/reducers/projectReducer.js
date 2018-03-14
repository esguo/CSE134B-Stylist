import * as types from '../actions/actionTypes'
import initialState from './initialState';
import * as projectStatus from '../projectStatus'

export default function projecctReducer(state = initialState, action){
  switch (action.type){
    case types.CREATE_PROJECT_SUCCESS:
      console.log("Creating a new project");
      console.log(action.project);
      console.log(state);
      var newState = Object.assign({}, state, {projects: [...state.projects, action.project]});
      console.log(newState);
      alert(JSON.stringify(newState))
      return newState
    case types.EDIT_PROJECT_SUCCESS:
      return state;

    case types.DELETE_PROJECT_SUCCESS:
      var projectID = action.projectID
      var newState = Object.assign({}, state, {projects: state.projects.filter(project => project.projectID != projectID)});
      console.log(newState);
      return newState

    case types.ACTIVATE_PROJECT_SUCCESS:

    var newState = Object.assign({}, state, {projects: state.projects.map(
      project => {
        if(project.projectID == action.projectID){
          return Object.assign({}, project, {status: projectStatus.ACTIVE_PROJECT} )
        }
        return project
      }
    )})
      console.log(newState)
      return newState;

    case types.FINISH_PROJECT_SUCCESS:
    var newState = Object.assign({}, state, {projects: state.projects.map(
      project => {
        if(project.projectID == action.projectID){
          return Object.assign({}, project, {status: projectStatus.COMPLETED_PROJECT} )
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
