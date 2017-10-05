import DevTools from '../DevTools.js';
import thunkMiddleware from 'redux-thunk';
import {createStore, compose, applyMiddleware, combineReducers} from 'redux';

const middlewares = [thunkMiddleware];

function x(state = 15, action) {
  switch (action.type) {
    case 'INC':
      return state+1;
    case 'DEC':
      return state-1;
    default:
      return state
  }
}

function y(state = 20, action) {
  switch (action.type) {
    case 'INCY':
      return state+1;
    case 'DECY':
      return state-1;
    default:
      return state
  }
}
function z(state = "Latha", action) {
  switch (action.type) {
    case 'UPDTEDATA':
      return state+1;
    default:
      return state
  }
}

const rootReducer = combineReducers({
              x:x,
              y:y,
              z:z
});

const store = createStore(rootReducer, {} , compose(
    applyMiddleware(...middlewares),
    DevTools.instrument()
    // window.devToolsExtension ? window.devToolsExtension() : f => f // add support for Redux dev tools
  ));

export default store;
