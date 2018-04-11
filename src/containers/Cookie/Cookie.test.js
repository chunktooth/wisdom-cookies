import React from 'react';
import { Cookie } from './Cookie';
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

});