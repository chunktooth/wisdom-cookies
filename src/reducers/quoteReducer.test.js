import quoteReducer from './quoteReducer';
import * as action from '../actions';

describe('quoteReducer', () => {

  it('should return default state', () => {
    expect(quoteReducer(undefined, {})).toEqual([]);
  });

  it('should be able to keep wisdom', () => {
    const wisdom =
      {
        'message': 'Today is a gift, that\'s why it\'s called the present',
        'id': '1234'
      }

    expect(quoteReducer(undefined, action.keepWisdom(message, id))).toEqual(wisdom);
  });

});