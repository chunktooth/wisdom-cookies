import React from 'react';
import { Cookie } from './Cookie';
import { shallow } from 'enzyme';

describe('Cookie', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Cookie />);
  });

  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});