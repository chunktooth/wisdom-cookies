import * as actions from './index';

describe('actions', () => {

  describe('load wisdoms', () => {

    it('should return a type of LOAD_WISDOMS with payload of wisdoms', () => {
      const wisdoms = [{ 
        'message': 'Time is a flat circle.'
      }, 
      {
        'message': 'A wizard is never late'
      }];
      const expected = {
        type: 'LOAD_WISDOMS',
        wisdoms
      };

      expect(actions.loadWisdoms(wisdoms)).toEqual(expected);
    });

  });

  describe('keep in jar', () => {

    it('should return a type of KEEP_IN_JAR with payload of wisdoms', () => {
      const wisdom = { 
        'message': 'Time is a flat circle.' 
      };
      const expected = {
        type: 'KEEP_IN_JAR',
        wisdom
      };

      expect(actions.keepInJar(wisdom)).toEqual(expected);
    });

  });

  describe('trash from jar', () => {

    it('should return a type of TRASH_FROM_JAR with payload of wisdoms', () => {
      const id = '1984';
      const expected = {
        type: 'TRASH_FROM_JAR',
        id
      };

      expect(actions.trashFromJar(id)).toEqual(expected);
    });

  });

   describe('load moons', () => {

    it('should return a type of LOAD_MOONS with payload of moonphases', () => {
      const moonphases = [{"Error":0,
      "TargetDate":"1523807073770",
      "Moon":["Thunder Moon"],
      "Phase":"Waxing Crescent",
      "Distance":363468.16,
      "DistanceToSun":151945827.15136}];
      const expected = {
        type: 'LOAD_MOONS',
        moonphases
      };

      expect(actions.loadMoons(moonphases)).toEqual(expected);
    });

  });

})