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
  },
  {
    id: 4,
    name: 'Firebase',
    type: 'Mobile App dev Platform',
    votes: 4
  },
  {
    id: 5,
    name: 'Graph QL',
    type: 'API query language',
    votes: 3
  },
  {
    id: 6,
    name: 'Phoenix',
    type: 'Web Framework',
    votes: 2
  },
  {
    id: 7,
    name: 'MapBox',
    type: 'Library / Mapping platform',
    votes: 1
  },
  {
    id: 8,
    name: 'Scala js',
    type: 'Language',
    votes: 1
  },
  {
    id: 9,
    name: 'Go',
    type: 'Language',
    votes: 0
  },
  {
    id: 10,
    name: 'Ionic 2',
    type: 'Mobile App dev Platform',
    votes: 0
  },
  {
    id: 11,
    name: 'Angular 2.0',
    type: 'Web & Mobile Framework',
    votes: 0
  },
  {
    id: 12,
    name: 'Play',
    type: 'Framework (Scala & Java)',
    votes: 1
  },
  {
    id: 13,
    name: 'Web Assembly',
    type: 'Language',
    votes: 0
  },
  {
    id: 14,
    name: 'A-Frame',
    type: 'Framework for VR',
    votes: 0
  },
  {
    id: 15,
    name: 'Protocol Buffer',
    type: 'Library (serialization)',
    votes: 0
  },
  {
    id: 16,
    name: 'Falcor',
    type: 'Library (data fetching)',
    votes: 0
  },
  {
    id: 17,
    name: 'Elixir',
    type: 'Language',
    votes: 0
  },
  {
    id: 18,
    name: 'Ant Design',
    type: 'UI design language',
    votes: 0
  },
  {
    id: 19,
    name: 'Electron',
    type: 'Cross platform desktop app framework',
    votes: 0
  },
  {
    id: 20,
    name: 'Deck GL',
    type: 'Library (data viz based on web GL)',
    votes: 0
  },
  {
    id: 21,
    name: 'Vue',
    type: 'Web Framework',
    votes: 0
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
