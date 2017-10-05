import {FETCH_KITCHEN_DETAILS} from '../actions/index';

const INITIAL_STATE={all:[],post:null};

export default function(state = INITIAL_STATE,action)
{
    switch(action.type){
        case FETCH_KITCHEN_DETAILS:
          return {...state,all:action.payload};
         
        default:
        return state;
    }
}