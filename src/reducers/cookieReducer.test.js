import cookieReducer from './cookieReducer';
import * as action from '../actions';

describe('cookieReducer', () => {

  it('should return default state', () => {
    expect(cookieReducer(undefined, {})).toEqual([]);
  });

  it('should be able to keep wisdom', () => {
    const wisdom =
      {
        'message': 'Today is a gift, that\'s why it\'s called the present',
        'id': '1234'
      }

    expect(cookieReducer(undefined, action.keepWisdom(message, id))).toEqual(wisdom);
  });

});