import {combineReducers} from 'redux';
import techs from './techs';
import users from './users';
import selections from './selections';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  routing: routerReducer,
  user: users,
  techs: techs,
  selections: selections
});

export default rootReducer;
