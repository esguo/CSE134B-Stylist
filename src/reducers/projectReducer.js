import * as types from '../actions/actionTypes'
import initialState from './initialState';

export default function projecctReducer(state, action){
  switch (action.type){
    case types.CREATE_PROJECT_SUCCESS:
      console.log("Creating a new project");
      console.log(action.project);
      var newState = [Object.assign({}, action.project)];
      alert(JSON.stringify(newState))
      return {projectName:'hello'}
    case types.EDIT_PROJECT_SUCCESS:
      return state;
    case types.DELETE_PROJECT_SUCCESS:
      return state;

    default:
      return state;
  }
}
