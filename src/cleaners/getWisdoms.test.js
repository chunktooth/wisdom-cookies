import { getWisdoms } from './getWisdoms';

describe('getWisdoms', () => {

  it('should get wisdoms', async() => {
    const mockWisdoms = [
      {
        'message': 'Mankind is unkind, man..',
        'id': '5280'
      },
      {
        'message': 'Godluck and Goodspeeeed!',
        'id': '1234'
      }];
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockWisdoms)
    }));

    const received = await getWisdoms();

    expect(received).toEqual(mockWisdoms);
  });

  it('should throw an error in case of bad response', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));

    const expected = { "status": 500 };
    expect(getWisdoms()).rejects.toEqual(expected);
  });

});