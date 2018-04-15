import wisdomPaperReducer from './wisdomPaperReducer';
import * as action from '../actions';

describe('wisdomPaperReducer', () => {

  it('should return default state', () => {
    expect(wisdomPaperReducer(undefined, 
      {})).toEqual([]);
  });

  it('can load wisdoms', () => {
    const wisdoms = [
      {
        'message': 'Mankind is unkind, man',
        'id': '5280'
      },
      {
        'message': 'Godluck and Goodspeed!',
        'id': '1234'
      }];

    expect(wisdomPaperReducer(undefined, 
      action.loadWisdoms(wisdoms))).toEqual(wisdoms);
  });

});