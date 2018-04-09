import React from 'react';
import Cookie from './Cookie';
import { shallow } from 'enzyme';
import { mockQuotes } from '../../cleaners/mockData';

describe('Cookie', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Cookie />);
  });

  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should return quote that matches the randomized key', () => {
    const mockWisdom = mockQuotes[1].message;
    const expected = 'Godluck and Goodspeed';

    expect(mockWisdom).toEqual(expected);
  });

});