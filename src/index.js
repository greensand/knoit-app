import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Pageone from './component/pageone.js';
import Pagetwo from './component/pagetwo.js';
import { Router, browserHistory, IndexRoute, Route, Link } from 'react-router';
import routes from './routes.js';

ReactDOM.render(
  <Router history={browserHistory} routes={routes} >
  
  </Router>,
    document.getElementById('root')
);

registerServiceWorker();
