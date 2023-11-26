import { login, register } from "../../utils/util";

export const SPINNER_ON = "SPINNER_ON";
export const LOGIN = "LOGIN"; 
export const REGISTER =  "REGISTER";
export const CLEAR_MESSAGES =  "CLEAR_MESSAGES";
export const SET_ERROR_MESSAGE =  "SET_ERROR_MESSAGE";
export const SET_SUCCESS_MESSAGE =  "SET_SUCCESS_MESSAGE";
export const LOGIN_HANDLER =  "LOGIN_HANDLER";
export const REGISTER_HANDLER =  "REGISTER_HANDLER";
export const CLEAR_FORM_FIELD = "CLEAR_FORM_FIELD";

export const loginChangeHandler = (inputs) => {
    return {type : LOGIN_HANDLER, payload : inputs};
}

export const registerChangeHandler = (inputs) => {
    return {type : REGISTER_HANDLER, payload : inputs};
}

export const initiateLogin = (credentials) => dispatch => {
    dispatch(setSpinnerOn(true));
    dispatch(clearMessage());
    login(credentials).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    }).finally(() => {
        dispatch(setSpinnerOn(false))
        dispatch(clearFormField());
    });
}
export const initiateRegister = (credentials) => dispatch => {
    dispatch(setSpinnerOn(true));
    dispatch(clearMessage());
    register(credentials).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    }).finally(() => {
        dispatch(setSpinnerOn(false))
    });
}

const setSpinnerOn = (bool) => {
    return {type : SPINNER_ON, payload : bool};
}

export const clearMessage = () => {
    return {type : CLEAR_MESSAGES};
}

const setErrorMessage = (message) => {
    return {type : SET_ERROR_MESSAGE, payload : message};
}

const setSuccessMessage = (message) => {
    return {type : SET_SUCCESS_MESSAGE, payload : message};
}

const clearFormField = () => {
    return {type : CLEAR_FORM_FIELD};
}