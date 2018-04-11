import * as actions from './index';

describe('keep wisdom', () => {

  it('should return a type of KEEP_WISDOM with payload of message', () => {
    const wisdom = { 'message': 'You shall not pass!' };
    const expected = {
      type: 'KEEP_WISDOM',
      wisdom
    };

    expect(actions.keepWisdom(wisdom)).toEqual(expected);
  });

});