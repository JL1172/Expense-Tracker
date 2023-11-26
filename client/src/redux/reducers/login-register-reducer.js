import { CLEAR_FORM_FIELD, CLEAR_MESSAGES, LOGIN_HANDLER, REGISTER_HANDLER, SET_ERROR_MESSAGE, SET_SUCCESS_MESSAGE, SPINNER_ON } from "../actions/login-register-actions"

const initialState = {
    spinnerOn: false,
    loginUsername: "",
    loginPassword: "",
    registerUsername: "",
    registerPassword: "",
    register_reenter_password : "",
    registerIncome: "",
    registerNetWorth: "",
    successMessage: "",
    errorMessage: "",
}

export const log_reg_reducer = (state = initialState, action) => {
    switch (action.type) {
        case (SPINNER_ON):
            return ({ ...state, spinnerOn: action.payload });
        case (CLEAR_MESSAGES):
            return ({ ...state, successMessage: "", errorMessage: "" });
        case (LOGIN_HANDLER): 
            return ({...state, [action.payload.name] : action.payload.value})
        case (REGISTER_HANDLER): 
            return ({...state, [action.payload.name] : action.payload.value})
        case (SET_ERROR_MESSAGE) :
            return({...state, errorMessage : action.payload});
        case (SET_SUCCESS_MESSAGE) :
            return({...state, successMessage : action.payload});
        case (CLEAR_FORM_FIELD) :
            return(initialState); 
        default:
            return state;
    }
}