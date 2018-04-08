import React from 'react';
import { Jar } from './Jar';
import { shallow } from 'enzyme';

describe('Jar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Jar />);
  });

  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});