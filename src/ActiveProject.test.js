import {ActiveProjectBox, GetActiveProjects, ActiveProject} from './ActiveProject';
import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe('Active Project via Enzyme', () => {


  it('Active Project page contains an id projects', () => {
    const wrapper = shallow(<ActiveProject />);

    expect(wrapper.find('#projects').length).toBe(1);
  });

  it('Active Project page contains an id projets ', () => {
    const wrapper = shallow(<ActiveProject />);
    expect(wrapper.find(GetActiveProjects).length).toBe(1);
  });

  it('Active Project page contains an id projets ', () => {
    var state = {projects : [{
    projectID :1234,
    projectName: "New Hair1",
    budget : 150,
    endDate: "2/12/2018",
    stylist: "Jason",
    associate: "Eddie",
    key:123
  },
  {
  projectID :12345,
  projectName: "New Hair2",
  budget : 150,
  endDate: "2/12/2018",
  stylist: "Jason",
  associate: "Eddie",
  key:12345
},
{
projectID :12345,
projectName: "New Hair3",
budget : 150,
endDate: "2/12/2018",
stylist: "Jason",
associate: "Eddie",
key:123456
},

]};
    const wrapper = shallow(<GetActiveProjects data = {state.projects}/>);
    expect(wrapper.find(ActiveProjectBox).length).toBe(3);

  });


});
