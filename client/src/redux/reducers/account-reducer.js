import { CHANGE_HANDLER, CLEAR_ALL_FORM, CLEAR_ALL_MESSAGES,CLOSE_EDIT,ERROR_MESSAGE,SET_ROUTE,SET_STATE, SUCCESS_MESS } from "../actions/account-actions";

const initialState = {
    route : "fin",
    user_info_income : "",
    copy_income : 0,
    user_assets : "",
    copy_assets : 0,
    oldPassword : "",
    newPassword : "",
    successMessage : "",
    errorMessage : "",
    initiateEdit : false,
}

export const account_state = (state = initialState, action) => {
    switch(action.type) {
        case(CLEAR_ALL_MESSAGES) :
            return({...state, errorMessage : "", successMessage : ""});
        case(ERROR_MESSAGE) :
            return({...state, errorMessage : action.payload});
        case(SET_STATE) :
            return ({...state,copy_income : action.payload[0].user_info_income, copy_assets : action.payload[0].user_assets,  user_assets : action.payload[0].user_assets, user_info_income : action.payload[0].user_info_income});
        case(CHANGE_HANDLER) :
           return({...state, [action.payload.name] : action.payload.value, initiateEdit : true});
        case(CLOSE_EDIT) :
            return ({...state,initiateEdit : false});
        case(SET_ROUTE) :
            return({...state, route : action.payload});
        case(CLEAR_ALL_FORM) :
            return({...state, oldPassword : "", newPassword : ""});
        case(SUCCESS_MESS) :
            return({...state, successMessage : action.payload});
        default : 
            return state;
    }
}