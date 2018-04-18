import { getWisdoms } from './getWisdoms';
import { mockWisdoms } from '../mockData';

describe('getWisdoms', () => {

  it('should get wisdoms', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockWisdoms)
    }));

    const received = await getWisdoms();

    expect(received).toEqual(mockWisdoms);
  });

  it('should throw an error in case of bad response', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));

    const expected = Error(`Caught error: undefined`);
    
    await expect(getWisdoms()).rejects.toEqual(expected);
  });

});