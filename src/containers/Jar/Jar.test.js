import React from 'react';
import { Jar,
  mapStateToProps } from './Jar';
import { shallow } from 'enzyme';
import { mockJar } from '../../mockData';

describe('Jar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Jar jar={mockJar}/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should map jar state to props', () => {
    const mappedJar = mapStateToProps(mockJar);
    expect(mappedJar.jar).toEqual(mockJar.jar);
  });

});