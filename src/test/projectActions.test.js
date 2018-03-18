import expect from 'expect';
import * as projectActions from '../actions/projectActions';
import * as types from '../actions/actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

// Test a sync action
describe('Project Actions', () => {
  describe('createProjectSuccess', () => {
    it('should create a CREATE_PROJECT_SUCCESS action', () => {

      const project = {title: 'Something'};
      const expectedAction = {
        type: types.CREATE_PROJECT_SUCCESS,
        project: project
      };

      //act
      const action = projectActions.createProjectSuccess(project);

      //assert
      expect(action).toEqual(expectedAction);
    });
  });
  describe('editProjectSuccess', () => {

    // export function editProjectSuccess(projectID, projectName, budget){
    //   return { type: types.EDIT_PROJECT_SUCCESS, projectID, projectName, budget}
    // }
    it('should create a EDIT_PROJECT_SUCCESS action', () => {

      const project = {projectName: 'Something', budget: 50};
      const expectedAction = {
        type: types.EDIT_PROJECT_SUCCESS,
        projectID: "ID",
        projectName: 'Something',
        budget: 50
      };

      //act
      const action = projectActions.editProjectSuccess("ID", "Something", 50 );

      //assert
      expect(action).toEqual(expectedAction);
    });
  });
});
