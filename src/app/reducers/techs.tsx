import {ADD_TECH, DELETE_TECH, EDIT_TECH, ADD_VOTE, REMOVE_VOTE} from '../constants/ActionTypes';
import {assign} from '../assign';

const initialState = [
  {
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
  },
  {
    id: 2,
    name: 'React',
    type: 'Web Framework',
    votes: [
      '117572460453417284894',
      '117572460453417284895',
      '117572460453417284896',
      '117572460453417284897',
      '117572460453417284898'
    ]
  },
  {
    id: 3,
    name: 'React-Native',
    type: 'Mobile Framework',
    votes: [
      '117572460453417284894',
      '117572460453417284895',
      '117572460453417284896',
      '117572460453417284897',
      '117572460453417284898'
    ]
  },
  {
    id: 4,
    name: 'Firebase',
    type: 'Mobile App dev Platform',
    votes: [
      '117572460453417284894',
      '117572460453417284895',
      '117572460453417284896',
      '117572460453417284897'
    ]
  },
  {
    id: 5,
    name: 'Graph QL',
    type: 'API query language',
    votes: [
      '117572460453417284894',
      '117572460453417284895',
      '117572460453417284896'
    ]
  },
  {
    id: 6,
    name: 'Phoenix',
    type: 'Web Framework',
    votes: [
      '117572460453417284894',
      '117572460453417284895'
    ]
  },
  {
    id: 7,
    name: 'MapBox',
    type: 'Library / Mapping platform',
    votes: [
      '117572460453417284894'
    ]
  },
  {
    id: 8,
    name: 'Scala js',
    type: 'Language',
    votes: [
      '117572460453417284894'
    ]
  },
  {
    id: 9,
    name: 'Go',
    type: 'Language',
    votes: []
  },
  {
    id: 10,
    name: 'Ionic 2',
    type: 'Mobile App dev Platform',
    votes: []
  },
  {
    id: 11,
    name: 'Angular 2.0',
    type: 'Web & Mobile Framework',
    votes: []
  },
  {
    id: 12,
    name: 'Play',
    type: 'Framework (Scala & Java)',
    votes: [
      '117572460453417284894'
    ]
  },
  {
    id: 13,
    name: 'Web Assembly',
    type: 'Language',
    votes: []
  },
  {
    id: 14,
    name: 'A-Frame',
    type: 'Framework for VR',
    votes: []
  },
  {
    id: 15,
    name: 'Protocol Buffer',
    type: 'Library (serialization)',
    votes: []
  },
  {
    id: 16,
    name: 'Falcor',
    type: 'Library (data fetching)',
    votes: []
  },
  {
    id: 17,
    name: 'Elixir',
    type: 'Language',
    votes: []
  },
  {
    id: 18,
    name: 'Ant Design',
    type: 'UI design language',
    votes: []
  },
  {
    id: 19,
    name: 'Electron',
    type: 'Cross platform desktop app framework',
    votes: []
  },
  {
    id: 20,
    name: 'Deck GL',
    type: 'Library (data viz based on web GL)',
    votes: []
  },
  {
    id: 21,
    name: 'Vue',
    type: 'Web Framework',
    votes: []
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
          votes: []
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

    case ADD_VOTE:
      return state.map(tech =>
        tech.id === action.techId ?
          assign({}, tech, {votes: [action.userId, ...tech.votes]}) :
          tech
      );

    case REMOVE_VOTE:
      return state.map(tech =>
        tech.id === action.techId ?
          assign({}, tech, {votes: tech.votes.filter( (vote_id) => vote_id !== action.userId )} ) :
          tech
      );

    default:
      return state;
  }
}
