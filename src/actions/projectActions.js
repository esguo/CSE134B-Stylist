import * as types from './actionTypes'

export function createProjectSuccess(project) {
  return {type: types.CREATE_PROJECT_SUCCESS, project}
}

export function editProjectSuccess(projectID, projectName, budget){
  return { type: types.EDIT_PROJECT_SUCCESS, projectID, projectName, budget}
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

export function sendMessageSuccess(message){
  return { type: types.SEND_MSG_SUCCESS, message}
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
export function editProject(projectID, projectName, budget){
  return function(dispatch, getState){
    console.log('Editing project', projectID, projectName, budget);
    dispatch(editProjectSuccess(projectID, projectName, budget))
  }
}

export function deleteProject(projectID){
  return function(dispatch, getState){
    console.log('Deleting project', projectID);
    dispatch(deleteProjectSuccess(projectID))
  }
}

export function finishProject(projectID){
  return function(dispatch, getState){
    console.log('Finishing project', projectID);
    dispatch(finishProjectSuccess(projectID))
  }
}

export function sendMessage(message){
  console.log("Sending Message");
  return function(dispatch, getState){
      dispatch(sendMessageSuccess(message))
  }
}
