import {combineReducers} from 'redux';
import techs from './techs';
import users from './users';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  routing: routerReducer,
  user: users,
  techs: techs
});

export default rootReducer;
