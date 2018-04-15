import React from 'react';
import { WisdomInJar, 
  mapStateToProps,
  mapDispatchToProps } from './WisdomInJar';
import { shallow } from 'enzyme';
import { mockJar } from '../../mockData';

describe('WisdomInJar', () => {
  let wrapper;

  beforeEach(() => {
    // mockMessage = 'Fear is the mind killer..';
    // mockId = '900';
    wrapper = shallow(<WisdomInJar 
      jar={mockJar} />);
  });

  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should map state to props', () => {
    const mappedJar = mapStateToProps(mockJar);
    expect(mappedJar.jar).toEqual(mockJar.jar);
  });

});