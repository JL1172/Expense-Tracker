import { ANALYTIC_ERROR, CLEAR_MESSAGE_NO3,FILTER_ON,SET_ANALYTIC_STATE } from "../actions/fin-actions";

const initialState = {
    analytics : [],
    errorMessage : "",
    filterOn : false,
}

export const fin_state = (state = initialState, action) => {
    switch(action.type) {
        case(CLEAR_MESSAGE_NO3) :
            return ({...state, errorMessage : ""});
        case(ANALYTIC_ERROR) :
            return({...state, errorMessage : action.payload});
        case(SET_ANALYTIC_STATE) :
            return ({...state, analytics : action.payload});
        case(FILTER_ON) :
            return ({...state, filterOn : action.payload})
        default : 
            return state;
    }
}