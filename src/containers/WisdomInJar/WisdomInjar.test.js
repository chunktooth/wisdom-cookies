import React from 'react';
import { WisdomInJar, 
  mapStateToProps,
  mapDispatchToProps } from './WisdomInJar';
import { shallow } from 'enzyme';
import { mockWisdom, mockJar } from '../../mockData';

describe('WisdomInJar', () => {
  let wrapper;
  const mockTrashFromJar = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<WisdomInJar 
      jar={mockJar}
      wisdom={mockWisdom}
      trashFromJar={mockTrashFromJar} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call trashFromJar when calling removeFromJar', () => {
    wrapper = shallow(<WisdomInJar 
      jar={mockJar}
      wisdom={mockWisdom}
      trashFromJar={mockTrashFromJar} />);
    
    wrapper.instance().removeFromJar();
    expect(mockTrashFromJar).toHaveBeenCalledWith(mockWisdom.id);
  });

  it('should map wisdom state to props', () => {
    const mappedWisdom = mapStateToProps(mockWisdom);
    expect(mappedWisdom.wisdom).toEqual(mockWisdom.wisdom);
  });

  it('should map jar state to props', () => {
    const mappedJar = mapStateToProps(mockJar);
    expect(mappedJar.jar).toEqual(mockJar.jar);
  });

  it('should dispatch trashFromJar to props', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.trashFromJar();
    expect(mockDispatch).toHaveBeenCalled();
  });

});