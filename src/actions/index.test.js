import * as actions from './index';

describe('keep wisdom', () => {

  it('should return a type of KEEP_IN_JAR with payload of wisdoms', () => {
    const wisdom = { 
      'message': 'Time is a flat circle.' 
    };
    const expected = {
      type: 'KEEP_WISDOM',
      wisdom
    };

    expect(actions.keepWisdom(wisdom)).toEqual(expected);
  });

});