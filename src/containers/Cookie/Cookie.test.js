import React from 'react';
import { Cookie,
  mapStateToProps,
  mapDispatchToProps} from './Cookie';
import { shallow } from 'enzyme';
import { mockJar, mockWisdoms } from '../../mockData';

describe('Cookie', () => {
  let wrapper, mockKeepInJar;

  beforeEach(() => {
    mockKeepInJar = jest.fn();
    wrapper = shallow(<Cookie 
      keepInJar={mockKeepInJar}
      jar={mockJar} 
      wisdoms={mockWisdoms} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should be update revealWisdom state', async () => {
    console.log(wrapper.state())
    expect(wrapper.state('revealWisdom')).toEqual(false);
    wrapper.instance().eatCookie();
    console.log(wrapper.state())
    await expect(wrapper.state('revealWisdom')).toEqual(true); 
    // setTimeout(() => { 
    //   expect(wrapper.state('revealWisdom')).toEqual(true); 
    // }, 0);
  });

  it('should be update brokenCookie state', () => {
    expect(wrapper.state('brokenCookie')).toEqual(false);
    wrapper.instance().eatCookie();
    setTimeout(() => { 
      expect(wrapper.state('brokenCookie')).toEqual(true); 
    }, 0);
  });

  it('should be update wisdom state', () => {
    wrapper.instance().hideWisdom();
    expect(wrapper.state('wisdom')).toEqual({});
  });

  it('should be update brokenCookie state', () => {
    wrapper.instance().hideWisdom();
    expect(wrapper.state('brokenCookie')).toEqual(false);
  });

  it('should be update revealWisdom state', () => {
    wrapper.instance().hideWisdom();
    expect(wrapper.state('revealWisdom')).toEqual(false);
  });

  it('should set wisdom state when invoking showWisdom', () => {
    wrapper.instance().showWisdom(mockWisdoms);
    const received = wrapper.state('wisdom');
    expect(Object.keys(received)).toHaveLength(2);
  });

  it('should call keepInJar if wisdom is not already in the jar', () => {
    wrapper.instance().putWisdomInJar();
    expect(mockKeepInJar).toHaveBeenCalled();
  });

  it('should map jar state to props', () => {
    const mappedJar = mapStateToProps(mockJar);
    expect(mappedJar.jar).toEqual(mockJar.jar);
  });

  it('should map wisdoms state to props', () => {
    const mappedWisdoms = mapStateToProps(mockWisdoms);
    expect(mappedWisdoms.wisdoms).toEqual(mappedWisdoms.wisdoms);
  });

  it('should dispatch keepInJar to props', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.keepInJar();
    expect(mockDispatch).toHaveBeenCalled();
  });

});