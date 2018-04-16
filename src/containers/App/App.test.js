import React from 'react';
import { App, 
  mapStateToProps, 
  mapDispatchToProps } from './App';
import { shallow } from 'enzyme';
import { mockJar, 
  mockWisdoms,
  mockMoonphases } from '../../mockData';
import { getWisdoms } from '../../cleaners/getWisdoms';
import { getMoons } from '../../cleaners/getMoons';
jest.mock('../../cleaners/getWisdoms');
jest.mock('../../cleaners/getMoons');

describe('App', () => {
  let wrapper;
  const mockLoadWisdoms = jest.fn();
  const mockLoadMoons = jest.fn();
    
  beforeEach(() => {
    wrapper = shallow(<App 
      jar={mockJar}
      loadWisdoms={mockLoadWisdoms} 
      loadMoons={mockLoadMoons} />,
    { disableLifecycleMethods: true });
  });

  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should fetch and load wisdoms into store', async () => {
    await wrapper.instance().componentDidMount();
    await expect(getWisdoms).toHaveBeenCalled();
  });

   it('should fetch and load moons into store', async () => {
    await wrapper.instance().componentDidMount();
    await expect(getMoons).toHaveBeenCalled();
  });

  it('should map jar state to props', () => {
    const mappedJar = mapStateToProps(mockJar);
    expect(mappedJar.jar).toEqual(mockJar.jar);
  });

  it('should map wisdoms state to props', () => {
    const mappedWisdoms = mapStateToProps(mockWisdoms);
    expect(mappedWisdoms.wisdoms).toEqual(mockWisdoms.wisdoms);
  });

  it('should map moonphases state to props', () => {
    const mappedMoonphases = mapStateToProps(mockMoonphases);
    expect(mappedMoonphases.moonphases).toEqual(mockMoonphases.moonphases);
  });

  it('should dispatch loadWisdoms to props', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.loadWisdoms();
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('should dispatch loadMoons to props', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.loadMoons();
    expect(mockDispatch).toHaveBeenCalled();
  });

});