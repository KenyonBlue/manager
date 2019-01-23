import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: ''};

//function with 2 arguments 
//always have a switch statement and default case
//can never return undefined
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload};
        default:
            return state;
    }
};