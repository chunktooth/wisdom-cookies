import React from 'react';
import { App, 
  mapStateToProps, 
  mapDispatchToProps } from './App';
import { shallow } from 'enzyme';
import { mockJar, 
  mockWisdoms } from '../../mockData';
import { getWisdoms } from '../../cleaners/getWisdoms';
jest.mock('../../cleaners/getWisdoms');

describe('App', () => {
  let wrapper;
  const mockLoadWisdoms = jest.fn();
    
  beforeEach(() => {
    wrapper = shallow(<App 
      jar={mockJar}
      loadWisdoms={mockLoadWisdoms} />,
    { disableLifecycleMethods: true });
  });

  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should fetch and load wisdoms into store', async () => {
    await wrapper.instance().componentDidMount();
    await expect(getWisdoms).toHaveBeenCalled();
  });

  it('should map jar state to props', () => {
    const mappedJar = mapStateToProps(mockJar);
    expect(mappedJar.jar).toEqual(mockJar.jar);
  });

  it('should map wisdoms state to props', () => {
    const mappedWisdoms = mapStateToProps(mockWisdoms);
    expect(mappedWisdoms.wisdoms).toEqual(mappedWisdoms.wisdoms);
  });

  it('should map loadWisdoms dispatch to props', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.loadWisdoms();
    expect(mockDispatch).toHaveBeenCalled();
  });

});