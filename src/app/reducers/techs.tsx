import {ADD_TECH, DELETE_TECH, EDIT_TECH} from '../constants/ActionTypes';
import {assign} from '../assign';

const initialState = [
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
];

export default function techs(state: any = initialState, action: any) {
  switch (action.type) {
    case ADD_TECH:
      return [
        {
          id: state.reduce((maxId, tech) => Math.max(tech.id, maxId), -1) + 1,
          name: action.name,
          type: '',
          votes: 0
        },
        ...state
      ];

    case DELETE_TECH:
      return state.filter(tech =>
        tech.id !== action.id
      );

    case EDIT_TECH:
      return state.map(tech =>
        tech.id === action.id ?
          assign({}, tech, {name: action.name}) :
          tech
      );

    default:
      return state;
  }
}
