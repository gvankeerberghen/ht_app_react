import selections from './selections';
import * as types from '../constants/ActionTypes';

describe('selections reducer', () => {
  it('should handle initial state', () => {
    expect(
      selections(undefined, {})
    ).toEqual({selectedTechId: 2});
  });

  it('should handle SELECT_TECH', () => {
    expect(
      selections({}, {
        type: types.SELECT_TECH,
        id: 13
      })
    ).toEqual({selectedTechId: 13});

    expect(
      selections({selectedTechId: 13}, {
        type: types.SELECT_TECH,
        id: 21
      })
    ).toEqual({selectedTechId: 21});
  });
});
