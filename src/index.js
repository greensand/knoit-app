import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import { Router, Route,IndexRoute, browserHistory } from 'react-router';
import routes from './routes';
import reducers from './reducers';
import promise from 'redux-promise';
import registerServiceWorker from './registerServiceWorker';
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}>
    < Router history = { browserHistory }
    routes = { routes }/>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
