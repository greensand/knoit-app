import { combineReducers } from 'redux';
import Kitchen_Details from './reducer_kitchen.js';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    kitchen_details:Kitchen_Details,
    form : formReducer
});

export default rootReducer;