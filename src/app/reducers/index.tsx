import {combineReducers} from 'redux';
import techs from './techs';
import users from './users';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  routing: routerReducer,
  techs: techs,
  user: users
});

export default rootReducer;
