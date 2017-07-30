import {ADD_TECH, DELETE_TECH, EDIT_TECH, SWITCH_VOTE} from '../constants/ActionTypes';
import {assign} from '../assign';

const initialState = [
  {
    id: 1,
    name: 'Elm',
    type: 'Language',
    description: 'A delightful language for reliable webapps. Generate JavaScript with great performance and no runtime exceptions. Boasts about JavaScript interop, no runtime exceptions, great performance and enforced semantic versioning.',
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
    description: 'A JavaScript library for building user interfaces. Boasts about being declarative, component-based and Learn-once, Write anywhere.',
    siteUrl: 'https://facebook.github.io/react/',
    links: [
      {
        name: 'Udemy React + Redux course',
        description: 'A nice complete course on React + Redux',
        url: 'https://www.udemy.com/react-redux/',
        type: 'Tutorial'
      }, {
        name: 'Foutain scaffolding tool',
        description: 'A Yeoman generator for all your frontend projects',
        url: 'http://fountainjs.io/',
        type: 'Tool'
      }, {
        name: 'React + Redux explanation',
        description: 'A tutorial on React + Redux',
        url: 'https://www.codementor.io/reactjs/tutorial/intro-to-react-redux-pros',
        type: 'Tutorial'
      }, {
        name: 'Redux home page',
        description: 'Redux is one of the most used predictable state container with React',
        url: 'http://redux.js.org/',
        type: 'Info'
      }, {
        name: 'Material Design for React',
        description: 'A Set of React Components that Implement Google\'s Material Design',
        url: 'http://www.material-ui.com/',
        type: 'Tool'
      }, {
        name: 'React Ant Design',
        type: 'Tool',
        description: 'A Set of React Components that Implement Ant Design.',
        siteUrl: 'https://ant.design/docs/react/introduce',
      }
    ],
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
    description: 'React Native lets you build mobile apps using only JavaScript.' +
      ' It uses the same design as React, letting you compose a rich mobile UI from declarative components.',
    siteUrl: 'https://facebook.github.io/react-native/',
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
    description: 'Firebase is Google\'s mobile platform that helps you quickly develop high-quality apps and grow your business.' + 
      ' Boasts about allowing you to build fast, without managing infrastructure, being backed by Google,' +
      ' allowing to have one console with products that work together.',
    siteUrl: 'https://firebase.google.com/',
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
    description: 'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.' + 
      ' Boasts about GraphQL providing a complete and understandable description of the data in your API,' +
      ' giving clients the power to ask for exactly what they need and nothing more,' +
      ' making it easier to evolve APIs over time, and enabling powerful developer tools.',
    siteUrl: 'http://graphql.org/',
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
    description: 'A productive web framework that does not compromise speed and maintainability.',
    siteUrl: 'http://phoenixframework.org/',
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
    description: 'An open source mapping platform for custom designed maps. Our APIs and SDKs are the building blocks to integrate location into any mobile or web app.',
    siteUrl: 'https://www.mapbox.com/',
    links: [],
    votes: [
      '117572460453417284894'
    ]
  },
  {
    id: 8,
    name: 'Scala js',
    type: 'Language',
    description: 'A safer way to build robust front-end web applications. Boasts about correctness, performance and interoperability.',
    siteUrl: 'https://www.scala-js.org/',
    links: [],
    votes: [
      '117572460453417284894'
    ]
  },
  {
    id: 9,
    name: 'Go',
    type: 'Language',
    description: 'Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.',
    siteUrl: 'https://golang.org/',
    links: [],
    votes: []
  },
  {
    id: 10,
    name: 'Ionic 2',
    type: 'Mobile App dev Platform',
    description: 'The top open source framework for building amazing mobile apps. Boast about being free and open-source, fully cross-platform, having native plugins and first-class documentation.',
    siteUrl: '',
    links: [],
    votes: []
  },
  {
    id: 11,
    name: 'Angular',
    type: 'Web & Mobile Framework',
    description: 'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target.',
    siteUrl: 'https://angular.io/',
    links: [],
    votes: []
  },
  {
    id: 12,
    name: 'Play',
    type: 'Web Framework',
    description: 'The High Velocity Web Framework For Java and Scala. Boasts about being developer friendly, scaling predictably, catering for the needs of modern web & mobile apps.',
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
    description: 'WebAssembly or wasm is a new portable, size- and load-time-efficient format suitable for compilation to the web.' +
      ' It is a low-level bytecode format for in-browser client-side scripting, evolved from JavaScript.' +
      ' Its initial aim is to support compilation from C and C++, though other source languages such as Rust are also supported.',
    siteUrl: 'http://webassembly.org/',
    links: [],
    votes: []
  },
  {
    id: 14,
    name: 'A-Frame',
    type: 'Web framework',
    description: 'A web framework for building virtual reality experiences. Make WebVR with HTML and Entity-Component.',
    siteUrl: 'https://aframe.io/',
    links: [],
    votes: []
  },
  {
    id: 15,
    name: 'Protocol Buffer',
    type: 'Serialization mechanism',
    description: 'Protocol buffers are Google\'s language-neutral, platform-neutral, extensible mechanism for serializing structured data – think XML, but smaller, faster, and simpler.',
    siteUrl: 'https://developers.google.com/protocol-buffers/',
    links: [],
    votes: []
  },
  {
    id: 16,
    name: 'Falcor',
    type: 'Library',
    description: 'Falcor lets you represent all your remote data sources as a single domain model via a virtual JSON graph.' +
    ' You code the same way no matter where the data is, whether in memory on the client or over the network on the server.',
    siteUrl: 'https://netflix.github.io/falcor/',
    links: [],
    votes: []
  },
  {
    id: 17,
    name: 'Elixir',
    type: 'Language',
    description: 'Elixir is a dynamic, functional language designed for building scalable and maintainable applications.' +
    ' Elixir leverages the Erlang VM, known for running low-latency, distributed and fault-tolerant systems,' +
    ' while also being successfully used in web development and the embedded software domain.',
    siteUrl: 'https://elixir-lang.org/',
    links: [],
    votes: []
  },
  {
    id: 18,
    name: 'Ant Design',
    type: 'UI design guidelines',
    description: 'An enterprise-class UI design language and React-based implementation.',
    siteUrl: 'https://ant.design/',
    links: [],
    votes: []
  },
  {
    id: 19,
    name: 'Electron',
    type: 'Cross platform desktop app framework.',
    description: 'Build cross platform desktop apps with JavaScript, HTML, and CSS.',
    siteUrl: 'https://electron.atom.io/',
    links: [],
    votes: []
  },
  {
    id: 20,
    name: 'Deck GL',
    type: 'Library',
    description: 'A WebGL-powered framework for visual exploratory data analysis of large datasets.',
    siteUrl: 'https://uber.github.io/deck.gl/#/',
    links: [],
    votes: []
  },
  {
    id: 21,
    name: 'Vue',
    type: 'Web Framework',
    description: 'The Progressive JavaScript Framework. Boasts about being approachable, versatile and performant.',
    siteUrl: 'https://vuejs.org/',
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
