import { CLEAR_FORM_FIELD, CLEAR_MESSAGES, LOGIN_HANDLER, REGISTER_HANDLER, SET_ERROR_MESSAGE, SET_SUCCESS_MESSAGE, SPINNER_ON, SWITCH_TO_LOGIN } from "../actions/login-register-actions"

const initialState = {
    spinnerOn: false,
    loginUsername: "",
    loginPassword: "",
    registerUsername: "",
    registerPassword: "",
    register_reenter_password: "",
    registerIncome: "",
    registerNetWorth: "",
    successMessage: "",
    errorMessage: "",
    errorArray: false,
    loginPage: false,
}

export const log_reg_reducer = (state = initialState, action) => {
    switch (action.type) {
        case (SPINNER_ON):
            return ({ ...state, spinnerOn: action.payload });
        case (CLEAR_MESSAGES):
            return ({ ...state, successMessage: "", errorMessage: "" });
        case (LOGIN_HANDLER):
            return ({ ...state, [action.payload.name]: action.payload.value })
        case (REGISTER_HANDLER):
            return ({ ...state, [action.payload.name]: action.payload.value })
        case (SET_ERROR_MESSAGE):
            if (action.payload.error) {
                return ({ ...state, errorMessage: action.payload.error, errorArray: true });
            } else {
                return ({ ...state, errorMessage: action.payload, errorArray: false })
            }
        case (SET_SUCCESS_MESSAGE):
            console.log(action.payload)
            return ({ ...state, successMessage: action.payload });
        case (SWITCH_TO_LOGIN):
            return ({ ...state, loginPage: action.payload });
        case (CLEAR_FORM_FIELD):
            return ({...state,
                spinnerOn: false,
                loginUsername: "",
                loginPassword: "",
                registerUsername: "",
                registerPassword: "",
                register_reenter_password: "",
                registerIncome: "",
                registerNetWorth: "",
                loginPage: false,
                errorMessage: "",
                errorArray: false,
            });
        default:
            return state;
    }
}