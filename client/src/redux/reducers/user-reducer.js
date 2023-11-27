import { SPINNER_SET_ON, SWITCH_TO_HOME, SET_ERROR_DASH_MESSAGE, CLEAR_MESSAGES, TRANSFER_STATE } from "../actions/user-actions"

const initialState = {
    user_username: "",
    user_info_income: "",
    user_assets: "",
    spinnerOn: false,
    homePage: false,
    errorMessage: "",
}

export const user_state = (state = initialState, action) => {
    switch (action.type) {
        case (TRANSFER_STATE):
            return ({
                ...state, user_username: action.payload[0].user_username,
                user_info_income: action.payload[0].user_info_income, user_assets: action.payload[0].user_assets
            })
        case (SPINNER_SET_ON):
            return ({ ...state, spinnerOn: action.payload });
        case (SWITCH_TO_HOME):
            return ({ ...state, homePage: action.payload });
        case (SET_ERROR_DASH_MESSAGE):
            return ({ ...state, errorMessage: action.payload });
        case (CLEAR_MESSAGES):
            return ({ ...state, errorMessage: "" });
        default:
            return state;
    }
}