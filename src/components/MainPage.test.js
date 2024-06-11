import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

describe('MainPage component', () => {
  it('renders MainPage without crashing', () => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: false
    };
    const wrapper = shallow(<MainPage {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('filters robots correctly', () => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [{
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
      }],
      searchField: 'j',
      isPending: false
    };
    const wrapper = shallow(<MainPage {...mockProps} />);
    expect(wrapper.instance().filterRobots()).toEqual([{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }]);
  });

  it('filters robots correctly with different search term', () => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [{
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
      }],
      searchField: 'a',
      isPending: false
    };
    const wrapper = shallow(<MainPage {...mockProps} />);
    expect(wrapper.instance().filterRobots()).toEqual([]);
  });
});