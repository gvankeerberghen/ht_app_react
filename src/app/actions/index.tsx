import * as types from '../constants/ActionTypes';

export function addTech(name: string) {
  return {type: types.ADD_TECH, name};
}

export function deleteTech(id: number) {
  return {type: types.DELETE_TECH, id};
}

export function editTech(id: number, name: string) {
  return {type: types.EDIT_TECH, id, name};
}

export function selectTech(id: number) {
  return {type: types.SELECT_TECH, id};
}

export function switchVote(userId: string, techId: number) {
  return {type: types.SWITCH_VOTE, userId, techId};
}

export function login(gProfileObj: any) {
  return {type: types.USER_LOGGED_IN, payload: gProfileObj};
}
