import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {IStore} from '~react-redux~redux';
import {Provider} from 'react-redux';
import App from './app/containers/App';
import configureStore from './app/store/configureStore';
import {Router, Route, browserHistory} from 'react-router';
import {applyMiddleware} from 'redux';
import {routerMiddleware, syncHistoryWithStore} from 'react-router-redux';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

const routingMiddleware = routerMiddleware(browserHistory);

const store: IStore<any> = configureStore({}, applyMiddleware(routingMiddleware));
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path='/' component={App}/>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
