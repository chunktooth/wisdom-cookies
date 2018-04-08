import rootReducer from './index';
import { shallow } from 'enzyme';

describe('root reducer', () => {
  it('should match the snapshot', () => {
    expect(rootReducer).toMatchSnapshot();
  });
});