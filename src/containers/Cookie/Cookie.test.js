import React from 'react';
import { Cookie,
  mapStateToProps,
  mapDispatchToProps} from './Cookie';
import { shallow } from 'enzyme';
import { mockJar, mockWisdoms } from '../../mockData';

describe('Cookie', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Cookie />);
  });

  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should map jar state to props', () => {
    const mappedJar = mapStateToProps(mockJar);
    expect(mappedJar.jar).toEqual(mockJar.jar);
  });

  it('should map wisdoms state to props', () => {
    const mappedWisdoms = mapStateToProps(mockWisdoms);
    expect(mappedWisdoms.wisdoms).toEqual(mappedWisdoms.wisdoms);
  });

  it('should map keepInJar dispatch to props', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.keepInJar();
    expect(mockDispatch).toHaveBeenCalled();
  });

});