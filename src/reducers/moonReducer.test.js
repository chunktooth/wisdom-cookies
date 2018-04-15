import moonReducer from './moonReducer';
import * as action from '../actions';

describe('moonReducer', () => {

  it('should return default state', () => {
    expect(moonReducer(undefined, 
      {})).toEqual([]);
  });

  it('can load moonphases', () => {
    const moonphases = [{
      "Error":0,
      "TargetDate":"1523807073770",
      "Moon":["Thunder Moon"],
      "Phase":"Waxing Crescent",
      "Distance":363468.16,
      "DistanceToSun":151945827.15136
    }];

    expect(moonReducer(undefined, 
      action.loadMoons(moonphases))).toEqual(moonphases);
  });

});