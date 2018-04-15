import React from 'react';
import { WisdomInJar } from './WisdomInJar';
import { shallow } from 'enzyme';
import { mockWisdoms } from '../../mockData';

describe('WisdomInJar', () => {
  let wrapper, mockMessage, mockId;

  beforeEach(() => {
    mockMessage = 'Fear is the mind killer..';
    mockId = '900';
    wrapper = shallow(<WisdomInJar 
      message={mockMessage}
      id={mockId} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});