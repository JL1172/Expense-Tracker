import { login, register } from "../../utils/util";

export const SPINNER_ON = "SPINNER_ON";
export const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";
export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";
export const CLEAR_MESSAGES = "CLEAR_MESSAGES";
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
export const SET_SUCCESS_MESSAGE = "SET_SUCCESS_MESSAGE";
export const LOGIN_HANDLER = "LOGIN_HANDLER";
export const REGISTER_HANDLER = "REGISTER_HANDLER";
export const CLEAR_FORM_FIELD = "CLEAR_FORM_FIELD";
export const SWITCH_TO_DASH = "SWITCH_TO_DASH";
export const SWITCH_TO_LOGIN = "SWITCH_TO_LOGIN";
export const SET_LOGIN_SUCCESS = "SET_LOGIN_SUCCESS";

export const loginChangeHandler = (inputs) => {
    return { type: LOGIN_HANDLER, payload: inputs };
}

export const registerChangeHandler = (inputs) => {
    return { type: REGISTER_HANDLER, payload: inputs };
}

export const initiateLogin = (credentials) => dispatch => {
    dispatch(setSpinnerOn(true));
    dispatch(clearMessage());
    login(credentials).then(res => {
        window.localStorage.setItem("token", JSON.stringify(res.data.token));
        dispatch(loginSuccessMessage(res.data.message));
        setTimeout(() => {
            dispatch(switchToDash(true));
        }, 2000)
    }).catch(err => {
        dispatch(loginErrorMessage(err.response.data.message));
    }).finally(() => {
        setTimeout(() => {
            dispatch(setSpinnerOn(false));
        }, 2000);
    })
}
export const initiateRegister = (credentials) => dispatch => {
    dispatch(setSpinnerOn(true));
    dispatch(clearMessage());
    register(credentials).then(res => {
        dispatch(setSuccessMessage(res.data.message));
        dispatch(switchToLogin(true))
    }).catch(err => {
        console.log(err)
        dispatch(setErrorMessage(err.response.data.message));
    }).finally(() => {
        setTimeout(() => {
            dispatch(setSpinnerOn(false));
        }, 500);
    })
}
export const switchToLogin = (bool) => {
    return { type: SWITCH_TO_LOGIN, payload: bool };
}
export const switchToDash = (bool) => {
    return { type: SWITCH_TO_DASH, payload: bool };
}
const setSpinnerOn = (bool) => {
    return { type: SPINNER_ON, payload: bool };
}

export const clearMessage = () => {
    return { type: CLEAR_MESSAGES };
}

const setErrorMessage = (message) => {
    return { type: SET_ERROR_MESSAGE, payload: message };
}

const setSuccessMessage = (message) => {
    return { type: SET_SUCCESS_MESSAGE, payload: message };
}

export const clearFormField = () => {
    return { type: CLEAR_FORM_FIELD };
}

const loginSuccessMessage = (message) => {
    return { type: SET_LOGIN_SUCCESS, payload: message }
}
const loginErrorMessage = message => {
    return { type: SET_LOGIN_ERROR, payload: message };
}