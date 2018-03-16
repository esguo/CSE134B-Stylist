import EditProject from '../EditProject';
import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GetInactiveProjects, InactiveProjectBox, InactiveProject} from '../InactiveProject';


Enzyme.configure({ adapter: new Adapter() })

describe ('Inactive Project Page', () => {
  it('Test buttons', () => {
    const props = {
      projects:[
        {
          associate:"Jason",
          budget:"2323",
          ate:"03/15/2018",
          projectID:"db670976-98f1-4144-9c8d-fc228318812f",
          projectName:"saff",
          status:"inactive project",
          stylist:"Eddie"
        }]
    };

    const wrapper = mount(<InactiveProject {...props}/>);
    const buttons = wrapper.find('button');

    console.log(buttons)
    expect(buttons.length).toEqual(3)
    const makeItActive = buttons.find({id: 'makeItActive'})
    console.log(makeItActive)
    expect(makeItActive.length).toEqual(1)

  });
});




describe('Inactive Project via Enzyme', () => {
  const props = {
    projects:[
      {
        associate:"Jason",
        budget:"2323",
        ate:"03/15/2018",
        projectID:"db670976-98f1-4144-9c8d-fc228318812f",
        projectName:"saff",
        status:"inactive project",
        stylist:"Eddie"
      }]
  };
  const wrapper = mount(<InactiveProject {...props}/>);

  it('Inactive Project page contains an id projects', () => {

    expect(wrapper.find('#projects').length).toBe(1);
  });


  it('Inactive Project page contains 1 active project', () => {
    expect(wrapper.find('.active_project').length).toBe(1);
  });

  it('Inactive Project page contains 1 project', () => {
    console.log(wrapper.find(GetInactiveProjects));
    expect(wrapper.find(GetInactiveProjects).length).toBe(1);
  });


});
