import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Router, browserHistory} from 'react-router';
import routes from './routes.js';
import { Provider } from 'react-redux';
import store from './store/store.js';

ReactDOM.render(
  <Provider  store={store}  >
  <Router history={browserHistory} routes={routes}/>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
