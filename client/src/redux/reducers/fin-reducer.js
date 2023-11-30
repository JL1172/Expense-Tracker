import { ANALYTIC_ERROR, CLEAR_MESSAGE_NO3,FILTER_ON,FILTER_ON_TWO,HANDLE_CHANGE_RADIO,SET_ALL_CATEGORIES,SET_ANALYTIC_STATE } from "../actions/fin-actions";

const initialState = {
    analytics : [],
    errorMessage : "",
    filterOn : false,
    categories : [],
    filterOnTwo : false,
    filterChoice : "",
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
            return ({...state, filterOn : action.payload, filterOnTwo : false});
        case(FILTER_ON_TWO) :
            return ({...state, filterOnTwo : action.payload, filterOn : false});
        case(SET_ALL_CATEGORIES) :
            return ({...state, categories : action.payload});
        case(HANDLE_CHANGE_RADIO) :
            return ({...state, filterChoice : action.payload});
        default : 
            return state;
    }
}