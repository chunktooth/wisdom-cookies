import { getWisdoms, returnWisdom } from './getWisdoms';
import { mockQuotes } from './mockData';

describe('getWisdoms', () => {

  it('should get wisdoms', async() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockQuotes)
    }));

    const received = await getWisdoms();

    expect(received).toEqual(mockQuotes);
  });

  it('should throw an error in case of bad response', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));

    const expected = { "status": 500 };
    expect(getWisdoms()).rejects.toEqual(expected);
  });

});