import wisdomPaperReducer from './wisdomPaperReducer';
import * as action from '../actions';

describe('wisdomPaperReducer', () => {

  it('should return default state', () => {
    expect(wisdomPaperReducer(undefined, {})).toEqual([]);
  });

  it('can keep wisdom in jar', () => {
    const wisdom = { 
      message: 'Whiskey is mighty risky.',
      id: '888'
    }
    expect(wisdomPaperReducer(undefined, action.keepWisdom(wisdom))).toEqual([wisdom]);
  });

  it('can trash wisdom from jar', () => {
    const wisdoms = [{ 
      message: 'Whiskey is mighty risky.',
      id: '888' 
    },
    { 
      message: 'Never give into beer pressure.',
      id: '999' 
    }];
    const id = '888';
    const expected = [{ 
      message: 'Never give into beer pressure.',
      id: '999' 
    }];

    expect(wisdomPaperReducer(wisdoms, action.trashWisdom(id))).toEqual(expected);
  });

})