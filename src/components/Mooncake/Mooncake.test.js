import React from 'react';
import { Mooncake } from './Mooncake';
import { shallow } from 'enzyme';
import { mockMoonphase } from '../../mockData';

describe('Moons', () => {

  it('should match the snapshot', () => {
    let wrapper = shallow(<Mooncake 
      phase={mockMoonphase} />);
    expect(wrapper).toMatchSnapshot();
  });

});