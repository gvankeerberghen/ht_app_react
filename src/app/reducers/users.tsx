import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../constants/ActionTypes';

export default function users(state: any = {}, action: any) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        name: action.name,
        email: action.email
      };

    case USER_LOGGED_OUT:
      return {};

    default:
      return state;
  }
}
