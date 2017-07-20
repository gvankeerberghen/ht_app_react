import techs from './techs';
import * as types from '../constants/ActionTypes';

describe('techs reducer', () => {
  it('should handle initial state', () => {
    expect(
      techs(undefined, {})[0]
    ).toEqual({
        id: 1,
        name: 'Elm',
        type: 'Language',
        votes: [
          '117572460453417284894',
          '117572460453417284895',
          '117572460453417284896',
          '117572460453417284897',
          '117572460453417284898',
          '117572460453417284899',
          '117572460453417284900',
          '117572460453417284901'
        ]
      });
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
        votes: []
      }
    ]);

    expect(
      techs([
        {
          id: 0,
          name: 'Initial',
          type: 'init',
          votes: []
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
        votes: []
      }, {
        id: 0,
        name: 'Initial',
        type: 'init',
        votes: []
      }
    ]);
  });

  it('should handle SWICTH_VOTE to add votes', () => {
    expect(
      techs([
        {
          id: 0,
          name: 'Initial',
          type: 'init',
          votes: []
        }
      ], {
        type: types.SWITCH_VOTE,
        techId: 0,
        userId: '1'
      })
    ).toEqual([
        {
          id: 0,
          name: 'Initial',
          type: 'init',
          votes: ['1']
        }
      ]);

    expect(
      techs([
        {
          id: 0,
          name: 'Initial',
          type: 'init',
          votes: ['1']
        },
        {
          id: 2,
          name: 't2',
          type: 'type',
          votes: ['11']
        }
      ], {
        type: types.SWITCH_VOTE,
        techId: 0,
        userId: '10'
      })
    ).toEqual([
        {
          id: 0,
          name: 'Initial',
          type: 'init',
          votes: ['10', '1']
        },
        {
          id: 2,
          name: 't2',
          type: 'type',
          votes: ['11']
        }
      ]);
  });

  it('should handle SWITCH_VOTE to remove votes', () => {
    expect(
      techs([
        {
          id: 0,
          name: 'Initial',
          type: 'init',
          votes: ['1']
        }
      ], {
        type: types.SWITCH_VOTE,
        techId: 0,
        userId: '1'
      })
    ).toEqual([
        {
          id: 0,
          name: 'Initial',
          type: 'init',
          votes: []
        }
      ]);

    expect(
      techs([
        {
          id: 0,
          name: 'Initial',
          type: 'init',
          votes: ['1', '10']
        },
        {
          id: 2,
          name: 't2',
          type: 'type',
          votes: ['11']
        }
      ], {
        type: types.SWITCH_VOTE,
        techId: 0,
        userId: '10'
      })
    ).toEqual([
        {
          id: 0,
          name: 'Initial',
          type: 'init',
          votes: ['1']
        },
        {
          id: 2,
          name: 't2',
          type: 'type',
          votes: ['11']
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
          votes: []
        }, {
          name: 'Test 2',
          type: '',
          id: 2,
          votes: []
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
        votes: []
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
          votes: []
        }, {
          name: 'Test 2',
          type: '',
          id: 2,
          votes: []
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
          votes: []
        }, {
          name: 'Test 2',
          type: '',
          id: 2,
          votes: []
        }
    ]);
  });
});
