import { getQuotes, getWisdom } from './getQuotes';
import { mockQuotes } from './mockData';

describe('getQuotes', () => {

  it('should get quotes', async() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockQuotes)
    }));

    const received = await getQuotes();
    const expected = getWisdom(mockQuotes);

    expect(received).toEqual(expected);
  });

  it.skip('should throw an error in case of bad response', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));

    const expected = { "status": 500 };
    expect(getQuotes()).rejects.toEqual(expected);
  });

  it.skip('should return a wisdom object of message and id that matches the random key', () => {
    const expected = {
      'message': 'Godluck and Goodspeed!',
      'id': '1234'
    }
    expect(getWisdom(mockQuotes[1])).toEqual(expected);
  });

});