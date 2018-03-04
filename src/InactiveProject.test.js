import EditProject from './EditProject';
import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InactiveProject from './InactiveProject'
import {GetInactiveProjects, InactiveProjectBox} from './InactiveProject';

Enzyme.configure({ adapter: new Adapter() })

describe('Inactive Project via Enzyme', () => {

  it('Inactive Project page contains an id projects', () => {
    const wrapper = shallow(<InactiveProject />);
    expect(wrapper.find('#projects').length).toBe(1);
  });

  it('Inactive Project page contains 1 project', () => {
    const wrapper = shallow(<InactiveProject/>);
    expect(wrapper.find(GetInactiveProjects).length).toBe(1);
  });

  it('Inactive Project page contains 1 project', () => {
    const wrapper = shallow(<InactiveProjectBox/>);
    expect(wrapper.find('.active_project').length).toBe(1);
  });


});
