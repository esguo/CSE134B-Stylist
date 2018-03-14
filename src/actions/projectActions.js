import * as types from './actionTypes'

export function createProjectSuccess(project) {
  return {type: types.CREATE_PROJECT_SUCCESS, project}
}

export function editProjectSuccess(project){
  return { type: types.EDIT_PROJECT_SUCCESS, project}
}

export function deleteProjectSuccess(projectID){
  return { type: types.DELETE_PROJECT_SUCCESS, projectID}
}

export function activateProjectSuccess(projectID){
  return { type: types.ACTIVATE_PROJECT_SUCCESS, projectID}
}

export function finishProjectSuccess(projectID){
  return { type: types.FINISH_PROJECT_SUCCESS, projectID}
}

export function saveProject(project){
  console.log("OK");
  return function(dispatch, getState){
      dispatch(createProjectSuccess(project))
  }
}

export function activateProject(projectID){
  return function(dispatch, getState){
    console.log('Activating project: ', projectID);
    dispatch(activateProjectSuccess(projectID))
  }
}
export function editProject(projectID){
  return function(dispatch, getState){
    console.log('Editing project');
  }
}

export function deleteProject(projectID){
  return function(dispatch, getState){
    console.log('deleting project', projectID);
    dispatch(deleteProjectSuccess(projectID))
  }
}

export function finishProject(projectID){
  return function(dispatch, getState){
    console.log('finishing project', projectID);
    dispatch(finishProjectSuccess(projectID))
  }
}
