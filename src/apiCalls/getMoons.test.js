import { getMoons, cleanMoons } from './getMoons';
import { mockMoonphases, mockCleanedMoons } from '../mockData';


describe('getMoons', () => {

  it('should get moonphases', async() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockMoonphases)
    }));

    const received = await getMoons();
    const expected = cleanMoons(mockMoonphases);
    expect(received).toEqual(expected);
  });

  it('should throw an error in case of bad response', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));

    const expected = new Error(`Caught error: undefined`);
    
    await expect(getMoons()).rejects.toEqual(expected);
  });

});

describe('cleanMoons', () => {
  
  it('should return cleaned moon data', () => {
    const received = cleanMoons(mockMoonphases);
    expect(received).toEqual(mockCleanedMoons);
  });

}); 