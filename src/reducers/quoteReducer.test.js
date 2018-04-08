import quoteReducer from './quoteReducer';
import * as action from '../actions';

describe('quoteReducer', () => {

  it('should return default state', () => {
    expect(quoteReducer(undefined, {})).toEqual([]);
  });

  it('should loadQuotes', () => {
    const quotes = [
      {
        'message': 'Porque no?',
        'id': '5280'
      },
      {
        'message': 'Que sera, sera',
        'id': '1234'
      }
    ];

    expect(quoteReducer(undefined, action.loadQuotes(quotes))).toEqual(quotes);
  });

});