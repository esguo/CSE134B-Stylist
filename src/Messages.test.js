import EditProject from './EditProject';
import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InactiveProject from './InactiveProject'
import {Messages} from './Messages';

Enzyme.configure({ adapter: new Adapter() })

describe('Messages via Enzyme', () => {

  it('Messages page contains an id container', () => {
    const wrapper = shallow(<Messages />);
    expect(wrapper.find('.container').length).toBe(1);
  });

  it('Messages page is fully loaded', () => {
    const wrapper = shallow(<Messages />);
    expect(wrapper.find('div').length).toBe(9);
  });

  it('Messages page contains 2 rows', () => {
    const wrapper = shallow(<Messages />);
    expect(wrapper.find('.row').length).toBe(2);
  });

  it('Messages page contains 2 rows', () => {
    const wrapper = shallow(<Messages />);
    expect(wrapper.find('.column').length).toBe(2);
  });
});
