import { getQuotes, cleanQuotes  } from './getQuotes';
import { mockQuotes } from './mockData';

describe('getQuotes', () => {

  it('should get quotes', async() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockQuotes)
    }));

    const retrieved = await getQuotes();
    const expected = await cleanQuotes(mockQuotes);
    expect(retrieved).toEqual(expected);
  });

  it('should throw an error in case of bad response', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));

    const expected = { "status": 500 };
    expect(getQuotes()).rejects.toEqual(expected);
  });

});