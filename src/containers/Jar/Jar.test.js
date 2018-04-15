import React from 'react';
import { Jar } from './Jar';
import { shallow } from 'enzyme';
import { mockWisdoms } from '../../mockData';

describe('Jar', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Jar jar={mockWisdoms}/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});