import { getMoons } from './getMoons';
import { mockMoonphases } from '../mockData';

describe('getMoons', () => {

  it('should get moonphases', async() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockMoonphases)
    }));

    const received = await getMoons();

    expect(received).toEqual(mockMoonphases);
  });

  it.skip('should throw an error in case of bad response', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));

    const expected = Error(`Caught error: ${error.message}`);
    expect(getMoons()).rejects.toEqual(expected);
  });

});