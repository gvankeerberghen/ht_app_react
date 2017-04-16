import * as types from '../constants/ActionTypes';
import * as actions from './index';

describe('techs actions', () => {
  it('addTech should create ADD_TECH action', () => {
    expect(actions.addTech('Tech')).toEqual({
      type: types.ADD_TECH,
      name: 'Tech'
    });
  });

  it('deleteTech should create DELETE_TECH action', () => {
    expect(actions.deleteTech(1)).toEqual({
      type: types.DELETE_TECH,
      id: 1
    });
  });

  it('editTech should create EDIT_Tech action', () => {
    expect(actions.editTech(1, 'Tech 2')).toEqual({
      type: types.EDIT_TECH,
      id: 1,
      name: 'Tech 2'
    });
  });
});
