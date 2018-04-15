import jarReducer from './jarReducer';
import * as action from '../actions';

describe('jarReducer', () => {

  it('should return default state', () => {
    expect(jarReducer(undefined, 
      {})).toEqual([]);
  });

  it('can keep wisdom in jar', () => {
    const wisdom = { 
      message: 'Whiskey is mighty risky.',
      id: '888'
    };
    expect(jarReducer(undefined, 
      action.keepInJar(wisdom))).toEqual([wisdom]);
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

    expect(jarReducer(wisdoms, 
      action.trashFromJar(id))).toEqual(expected);
  });

});