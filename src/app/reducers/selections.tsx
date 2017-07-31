import {SELECT_TECH} from '../constants/ActionTypes';

const initialState = {
  selectedTechId: 2
};

export default function selections(state: any = initialState, action: any) {
  switch (action.type) {
    case SELECT_TECH:
      return {
        selectedTechId: action.id
      };

    default:
      return state;
  }
}
