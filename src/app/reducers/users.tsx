import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../constants/ActionTypes';

export default function users(state: any = {}, action: any) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        id: action.payload.googleId,
        name: action.payload.name,
        email: action.payload.email
      };

    case USER_LOGGED_OUT:
      return {};

    default:
      return state;
  }
}
