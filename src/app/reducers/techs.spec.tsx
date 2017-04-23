import techs from './techs';
import * as types from '../constants/ActionTypes';

describe('techs reducer', () => {
  it('should handle initial state', () => {
    expect(
      techs(undefined, {})
    ).toEqual([
      {
        id: 1,
        name: 'Elm',
        type: 'Language',
        votes: 8
      },
      {
        id: 2,
        name: 'React',
        type: 'Web Framework',
        votes: 5
      },
      {
        id: 3,
        name: 'React-Native',
        type: 'Mobile Framework',
        votes: 5
      }
    ]);
  });

  it('should handle ADD_TECH', () => {
    expect(
      techs([], {
        type: types.ADD_TECH,
        name: 'TESTTECH'
      })
    ).toEqual([
      {
        name: 'TESTTECH',
        id: 0,
        type: '',
        votes: 0
      }
    ]);

    expect(
      techs([
        {
          id: 0,
          name: 'Initial',
          type: 'init',
          votes: 0
        }
      ], {
        type: types.ADD_TECH,
        name: 'Added'
      })
    ).toEqual([
      {
        id: 1,
        name: 'Added',
        type: '',
        votes: 0
      }, {
        id: 0,
        name: 'Initial',
        type: 'init',
        votes: 0
      }
    ]);
  });

  it('should handle DELETE_TECH', () => {
    expect(
      techs([
        {
          name: 'Test 1',
          type: '',
          id: 1,
          votes: 0
        }, {
          name: 'Test 2',
          type: '',
          id: 2,
          votes: 0
        }
      ], {
        type: types.DELETE_TECH,
        id: 1
      })
    ).toEqual([
      {
        name: 'Test 2',
        type: '',
        id: 2,
        votes: 0
      }
    ]);
  });

  it('should handle EDIT_TECH', () => {
    expect(
      techs([
        {
          name: 'Test 1',
          type: '',
          id: 1,
          votes: 0
        }, {
          name: 'Test 2',
          type: '',
          id: 2,
          votes: 0
        }
      ], {
        type: types.EDIT_TECH,
        name: 'Fix the tests',
        id: 1
      })
    ).toEqual([
      {
          name: 'Fix the tests',
          type: '',
          id: 1,
          votes: 0
        }, {
          name: 'Test 2',
          type: '',
          id: 2,
          votes: 0
        }
    ]);
  });
});
