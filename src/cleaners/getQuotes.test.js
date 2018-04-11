import { getQuotes, getWisdom } from './getQuotes';
import { mockQuotes } from './mockData';

describe('getQuotes', () => {

  it('should get quotes', async() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockQuotes)
    }));

    expect(getQuotes()).toEqual(getQuotes(mockQuotes));
  });

  it('should throw an error in case of bad response', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));

    const expected = { "status": 500 };
    expect(getQuotes()).rejects.toEqual(expected);
  });

  it('should return a wisdom object of message and id that matches the random key', () => {

    const mockWisdom = mockQuotes[1].message;
    const expected = {
      'message': 'Godluck and Goodspeed!',
      'id': '1234'
    }
    expect(getWisdom(mockQuotes)).toEqual(expected);
  });

});