import {ADD_TECH, DELETE_TECH, EDIT_TECH, SWITCH_VOTE} from '../constants/ActionTypes';
import {assign} from '../assign';

const initialState = [
  {
    id: 1,
    name: 'Elm',
    type: 'Language',
    description: 'A delightful language for reliable webapps. Generate JavaScript with great performance and no runtime exceptions. Features JavaScript interop, no runtime exceptions, great performance and enforced semantic versioning.',
    siteUrl: 'http://elm-lang.org/',
    votes: [
      '117572460453417284894',
      '117572460453417284895',
      '117572460453417284896',
      '117572460453417284897',
      '117572460453417284898',
      '117572460453417284899',
      '117572460453417284900',
      '117572460453417284901'
    ],
    links: [
      {
        name: 'awesome-elm',
        url: 'https://github.com/isRuslan/awesome-elm',
        type: 'Resources',
        description: 'A list of videos, examples, libraries, tools, etc. Probably even better than this list ;-)',
      },
      {
        name: ' Let\'s be mainstream! User focused design in Elm',
        url: 'https://www.youtube.com/watch?v=oYk8CKH7OhE',
        type: 'Info',
        description: 'A talk from the creator of Elm, where he is specifically wondering how to get to the javascript community, with a typed,\' functional language',
      },
      {
        name: 'Make the Back-End Team Jealous: Elm in Production',
        url: 'https://www.youtube.com/watch?v=FV0DXNB94NE',
        type: 'Info',
        description: 'Talk from one of the early-adopters of Elm, where he\'s explaining how the biggest feature of Elm for him is the ease of refactorings',
      },
      {
        name: 'Toward a Better Front End Architecture: Elm',
        url: 'https://www.youtube.com/watch?v=EDp6UmaA9CM',
        type: 'Intro',
        description: 'Jan. 2017 introduction video to give you a quick overview of the language:',
      },
      {
        name: 'Code of elm architecture tutorial',
        url: 'https://github.com/evancz/elm-architecture-tutorial',
        type: 'Source code',
        description: 'The source code of an Elm tutorial on its architecture',
      },
      {
        name: 'Elm benchmarking lib',
        url: 'https://www.brianthicks.com/post/2017/02/27/introducing-elm-benchmark/',
        type: 'Info',
        description: 'Introduction to elm benchmarking library',
      },
      {
        name: 'Elm tutorial',
        url: 'https://www.elm-tutorial.org',
        type: 'Tutorial',
        description: 'Single Page App in Elm',
      },
      {
        name: 'SPA in elm',
        url: 'https://github.com/ohanhi/elm-taco',
        type: 'Source code',
        description: 'Example of a large Single Page App in Elm, with global state',
      },
      {
        name: 'Elm in production: surprises and pain points',
        url: 'https://www.youtube.com/watch?v=LZj_1qVURL0',
        type: 'Info',
        description: 'Elm in production: surprises and pain points',
      },
      {
        name: '6 months in Elm insights from a dev team',
        url: 'https://medium.com/@NewMountain/some-thoughts-on-elm-development-39a0f8a9002a',
        type: 'Info',
        description: '6 months in Elm insights from a dev team',
      },
      {
        name: 'I was wrong to dismiss Elm and I think you probably are too',
        url: 'https://dev.to/dnimmo/i-was-wrong-to-dismiss-elm-and-i-think-you-probably-aretoo',
        type: 'Info',
        description: ''
      }
    ]
  },
  {
    id: 2,
    name: 'React',
    type: 'Web Framework',
    description: '',
    siteUrl: '',
    links: [],
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
    description: '',
    siteUrl: '',
    links: [],
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
    description: '',
    siteUrl: '',
    links: [],
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
    description: '',
    siteUrl: '',
    links: [],
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
    description: '',
    siteUrl: '',
    links: [],
    votes: [
      '117572460453417284894',
      '117572460453417284895'
    ]
  },
  {
    id: 7,
    name: 'MapBox',
    type: 'Library / Mapping platform',
    description: '',
    siteUrl: '',
    links: [],
    votes: [
      '117572460453417284894'
    ]
  },
  {
    id: 8,
    name: 'Scala js',
    type: 'Language',
    description: '',
    siteUrl: '',
    links: [],
    votes: [
      '117572460453417284894'
    ]
  },
  {
    id: 9,
    name: 'Go',
    type: 'Language',
    description: '',
    siteUrl: '',
    links: [],
    votes: []
  },
  {
    id: 10,
    name: 'Ionic 2',
    type: 'Mobile App dev Platform',
    description: '',
    siteUrl: '',
    links: [],
    votes: []
  },
  {
    id: 11,
    name: 'Angular 2.0',
    type: 'Web & Mobile Framework',
    description: '',
    siteUrl: '',
    links: [],
    votes: []
  },
  {
    id: 12,
    name: 'Play',
    type: 'Framework (Scala & Java)',
    description: '',
    siteUrl: '',
    links: [],
    votes: [
      '117572460453417284894'
    ]
  },
  {
    id: 13,
    name: 'Web Assembly',
    type: 'Language',
    description: '',
    siteUrl: '',
    links: [],
    votes: []
  },
  {
    id: 14,
    name: 'A-Frame',
    type: 'Framework for VR',
    description: '',
    siteUrl: '',
    links: [],
    votes: []
  },
  {
    id: 15,
    name: 'Protocol Buffer',
    type: 'Library (serialization)',
    description: '',
    siteUrl: '',
    links: [],
    votes: []
  },
  {
    id: 16,
    name: 'Falcor',
    type: 'Library (data fetching)',
    description: '',
    siteUrl: '',
    links: [],
    votes: []
  },
  {
    id: 17,
    name: 'Elixir',
    type: 'Language',
    description: '',
    siteUrl: '',
    links: [],
    votes: []
  },
  {
    id: 18,
    name: 'Ant Design',
    type: 'UI design language',
    description: '',
    siteUrl: '',
    links: [],
    votes: []
  },
  {
    id: 19,
    name: 'Electron',
    type: 'Cross platform desktop app framework',
    description: '',
    siteUrl: '',
    links: [],
    votes: []
  },
  {
    id: 20,
    name: 'Deck GL',
    type: 'Library (data viz based on web GL)',
    description: '',
    siteUrl: '',
    links: [],
    votes: []
  },
  {
    id: 21,
    name: 'Vue',
    type: 'Web Framework',
    description: '',
    siteUrl: '',
    links: [],
    votes: []
  }
];

function switchVote(userId: string, voteList: Array<string>) {
  if (voteList.indexOf(userId) > -1) {
    return voteList.filter( (vote_id) => vote_id !== userId );
  } else {
    return [userId, ...voteList];
  }
}

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

    case SWITCH_VOTE:
      return state.map(tech =>
        tech.id === action.techId ?
          assign({}, tech, {votes: switchVote(action.userId, tech.votes)}) :
          tech
      );

    default:
      return state;
  }
}
