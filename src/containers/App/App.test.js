import React from 'react';
import { App , mapStateToProps, mapDispatchToProps } from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />,
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
    const mockJar = { jar: [{ 
      message: 'You only live twice' }]};
    const mappedJar = mapStateToProps(mockJar);
    expect(mappedJar.jar).toEqual(mockJar.jar);
  });

});