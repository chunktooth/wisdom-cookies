import * as actions from './index';
import { mockQuotes } from '../cleaners/mockData';

describe('load quotes', () => {

  it('should return a type of LOAD_QUOTES with payload', () => {
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

    const expected = {
      type: 'LOAD_QUOTES',
      quotes
    };

    expect(actions.loadQuotes(quotes)).toEqual(expected);
  });

});