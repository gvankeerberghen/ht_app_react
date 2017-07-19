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

export function addVote(userId: string, techId: number) {
  return {type: types.ADD_VOTE, userId, techId};
}

export function removeVote(userId: string, techId: number) {
  return {type: types.REMOVE_VOTE, userId, techId};
}

export function login(gProfileObj: any) {
  return {type: types.USER_LOGGED_IN, payload: gProfileObj};
}
