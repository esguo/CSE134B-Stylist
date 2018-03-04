import {InactiveProject, GetInactiveProjects } from '../src/InactiveProject';
import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CreateProject from '../src/CreateProject'

Enzyme.configure({ adapter: new Adapter() })

describe('CourseForm via Enzyme', () => {
  it('renders form', () => {
    const wrapper = shallow(<CreateProject />);
    expect(wrapper.find('form').length).toBe(1);
  });

  it('Contains a button whose value is "Create"', () => {
    const wrapper = shallow(<CreateProject />);

    expect(wrapper.containsAllMatchingElements([
<input type="submit" value = "Create"></input>
]))
  });


});
