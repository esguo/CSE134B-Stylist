import {GetCompletedProjects, CompletedProject, CompletedProjectBox} from './CompletedProject';
import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe('Compelted Project via Enzyme', () => {


  it('Completed Project page contains an id projects', () => {
    const wrapper = shallow(<CompletedProject />);

    expect(wrapper.find('#projects').length).toBe(1);
  });

  it('Completed Project page contains an id projets ', () => {
    const wrapper = shallow(<CompletedProject />);
    expect(wrapper.find(GetCompletedProjects).length).toBe(1);
  });

  it('Completed Project page contains an id projets ', () => {
    var state = {projects : [{
    projectID :1234,
    projectName: "New Hair",
    budget : 150,
    endDate: "2/12/2018",
    stylist: "Jason",
    associate: "Eddie",
    key:123
  },
  {
  projectID :12345,
  projectName: "New Hair",
  budget : 150,
  endDate: "2/12/2018",
  stylist: "Jason",
  associate: "Eddie",
  key:12345
}

]};
    const wrapper = shallow(<GetCompletedProjects data = {state.projects}/>);
    expect(wrapper.find(CompletedProjectBox).length).toBe(2);

  });


});
