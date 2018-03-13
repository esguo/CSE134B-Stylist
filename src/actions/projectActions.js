import * as types from './actionTypes'

export function createProjectSuccess(project) {
  return {type: types.CREATE_PROJECT_SUCCESS, project}
}

export function editProjectSuccess(project){
  return { type: types.EDIT_PROJECT_SUCCESS, project}
}

export function deleteProjectSuccess(project){
  return { type: types.DELETE_PROJECT_SUCCESS, project}
}

export function saveProject(project){
  console.log("OK");
  return function(dispatch, getState){
      dispatch(createProjectSuccess(project))
  }

}
