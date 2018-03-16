import expect from 'expect';
import projectReducer from '../reducers/projectReducer';
import * as actions from '../actions/projectActions';
import * as projectStatus from '../projectStatus'

describe('Project Reducer', () => {
  it('should add project when passed CREATE_COURSE_SUCCESS', () => {
    // arrange
    const initialState = {
      projects: [
        {
          associate:"Jason",
          budget:"2323",
          date:"03/15/2018",
          projectID:"db670976-98f1-4144-9c8d-fc228318812f",
          projectName:"saff",
          status:"inactive project",
          stylist:"Eddie"
        }
      ]};

      const newProject = {projectName: 'Test Project', budget: 50};

      const action = actions.createProjectSuccess(newProject);

      //act
      const newState = projectReducer(initialState, action);

      //assert
      console.log(newState);

      expect(newState.projects.length).toEqual(2);
      expect(newState.projects[0].projectName).toEqual('saff');
      expect(newState.projects[1].projectName).toEqual('Test Project');
    });

    it('should delete course when passed DELETE_PROJECT_SUCCESS', () => {
      // arrange
      const initialState = {
        projects: [
          {
            associate:"Jason",
            budget:"2323",
            date:"03/15/2018",
            projectID:"db670976-98f1-4144-9c8d-fc228318812f",
            projectName:"saff",
            status:"inactive project",
            stylist:"Eddie"
          }
        ]};

        const projectID = 'db670976-98f1-4144-9c8d-fc228318812f'
        const action = actions.deleteProjectSuccess(projectID);

        // act
        const newState = projectReducer(initialState, action);
        console.log(newState);
        expect(newState.projects.length).toEqual(0)
      });


      it('should edit project when passed EDIT_PROJECT_SUCCESS', () => {
        // arrange
        const initialState = {
          projects: [
            {
              associate:"Jason",
              budget:"2323",
              date:"03/15/2018",
              projectID:"db670976-98f1-4144-9c8d-fc228318812f",
              projectName:"saff",
              status:"inactive project",
              stylist:"Eddie"
            }
          ]};

        const projectID = "db670976-98f1-4144-9c8d-fc228318812f"
        const projectName = "New Project Name"
        const budget = "100"
        const action = actions.editProjectSuccess(projectID, projectName, budget);

        // act
        const newState = projectReducer(initialState, action);
        const updatedProject = newState.projects.find(a => a.projectID == projectID);

        // assert
        expect(updatedProject.projectName).toEqual("New Project Name");
        expect(updatedProject.budget).toEqual("100");
        expect(newState.projects.length).toEqual(1);
      });


      it('should edit project when passed EDIT_PROJECT_SUCCESS', () => {
        // arrange
        const initialState = {
          projects: [
            {
              associate:"Jason",
              budget:"2323",
              date:"03/15/2018",
              projectID:"db670976-98f1-4144-9c8d-fc228318812f",
              projectName:"saff",
              status:"inactive project",
              stylist:"Eddie"
            }
          ]};



        const projectID = "db670976-98f1-4144-9c8d-fc228318812f"
        const action = actions.activateProjectSuccess(projectID);

        // act
        const newState = projectReducer(initialState, action);
        const updatedProject = newState.projects.find(a => a.projectID == projectID);

        // assert
        expect(updatedProject.projectName).toEqual("saff");
        expect(updatedProject.budget).toEqual("2323");
        expect(newState.projects.length).toEqual(1);
        expect(updatedProject.status).toEqual(projectStatus.ACTIVE_PROJECT);


        const action2 = actions.finishProjectSuccess(projectID);
        const newState2 = projectReducer(newState, action2);
        const updatedProject2 = newState2.projects.find(a => a.projectID == projectID);
        expect(updatedProject2.projectName).toEqual("saff");
        expect(updatedProject2.budget).toEqual("2323");
        expect(newState2.projects.length).toEqual(1);
        expect(updatedProject2.status).toEqual(projectStatus.COMPLETED_PROJECT);

      });

    });
