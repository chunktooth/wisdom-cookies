import React from 'react';
import { Moons,
  mapStateToProps, 
  mapDispatchToProps } from './Moons';
import { shallow } from 'enzyme';
import { mockMoonphasesArray } from '../../mockData';


describe('Moons', () => {
  let wrapper;
 
  beforeEach(() => {
    wrapper = shallow(<Moons 
      moonphases={mockMoonphasesArray} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should map moonphases state to props', () => {
    const mappedMoonphases = mapStateToProps(mockMoonphasesArray);
    expect(mappedMoonphases.moonphases).toEqual(mockMoonphasesArray.moonphases);
  });

  it('should dispatch loadMoons to props', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.loadMoons();
    expect(mockDispatch).toHaveBeenCalled();
  });

});