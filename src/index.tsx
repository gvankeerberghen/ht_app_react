import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {IStore} from '~react-redux~redux';
import {Provider} from 'react-redux';
import App from './app/containers/App';
import Login from './app/components/Login';
import configureStore from './app/store/configureStore';
import {Router, Route, browserHistory} from 'react-router';
import {applyMiddleware} from 'redux';
import {routerMiddleware, routerActions, syncHistoryWithStore} from 'react-router-redux';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import { UserAuthWrapper } from 'redux-auth-wrapper';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

const routingMiddleware = routerMiddleware(browserHistory);

const store: IStore<any> = configureStore({}, applyMiddleware(routingMiddleware));
const history = syncHistoryWithStore(browserHistory, store);

// redirects to /login by default
const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.user, // how to get the user state
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={history}>
        <Route path='/' component={UserIsAuthenticated(App)}/>
        <Route path='login' component={Login}/>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
