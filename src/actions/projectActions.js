import * as types from './actionTypes'
import projectApi from '../api/mockProjectApi'

export function createProjectSuccess(project) {
  return {type: types.CREATE_PROJECT_SUCCESS, project}
}

export function editProjectSuccess(projectID, projectName, budget, description){
  return { type: types.EDIT_PROJECT_SUCCESS, projectID, projectName, budget, description}
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

export function sendMessageSuccess(page, message){
  return { type: types.SEND_MSG_SUCCESS, page, message}
}

export function saveProject(project){
  console.log("OK");
  return function(dispatch, getState){
    return projectApi.saveProject(project).then(project => {
      dispatch(createProjectSuccess(project))
    }).catch(error => {
      throw(error)
    })
  }
}

export function activateProject(projectID){
  return function(dispatch, getState){
    return projectApi.saveProject(projectID).then(project => {
      dispatch(activateProjectSuccess(projectID))
    }).catch(error => {
      throw(error)
    })
  }
}

export function editProject(projectID, projectName, budget, description){
  return function(dispatch, getState){
    console.log('Editing project', projectID, projectName, budget, description);
    dispatch(editProjectSuccess(projectID, projectName, budget, description))
  }
}

export function deleteProject(projectID){
  return function(dispatch, getState){
    return projectApi.saveProject(projectID).then(project => {
      dispatch(deleteProjectSuccess(projectID))
    }).catch(error => {
      throw(error)
    })
  }

}

export function finishProject(projectID){
  return function(dispatch, getState){
    return projectApi.saveProject(projectID).then(project => {
      dispatch(finishProjectSuccess(projectID))
    }).catch(error => {
      throw(error)
    })
  }
}

export function sendMessage(page, message){
  console.log("Sending Message");
  return function(dispatch, getState){
    dispatch(sendMessageSuccess(page, message))
  }
}
