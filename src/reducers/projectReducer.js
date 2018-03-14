import * as types from '../actions/actionTypes'
import initialState from './initialState';

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
      return state;

    default:
      return state;
  }
}
