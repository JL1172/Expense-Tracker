import { ERROR_EXPENSE_ADDITION, HANDLE_INPUT_CHANGE, RESET_STATE, SET_READ_ONLY_STATE, SPINNER_EXPENSE, SUCCESS_EXPENSE_ADDITION, VERIFY_TOLERANCE } from "../actions/expenseAdd-actions";

const initialState = {
    categories : [],
    category_chosen : "",
    activity_description : "",
    errorMessage : "",
    successMessage : false,
    spinnerOn : false,
    activity_amount : "",
    tolerance : false,
}

export const expense_add_state = (state = initialState, action) => {
    switch(action.type) {
        case(SET_READ_ONLY_STATE) :
            return ({...state, categories : action.payload});
        case(HANDLE_INPUT_CHANGE) :
            return ({...state, [action.payload.name]: action.payload.value});
        case(SPINNER_EXPENSE) :
            return ({...state, spinnerOn : action.payload});
        case(SUCCESS_EXPENSE_ADDITION) :
            return ({...state, successMessage : action.payload});
        case(ERROR_EXPENSE_ADDITION) :
            return ({...state, errorMessage : action.payload});
        case(VERIFY_TOLERANCE) :
            return ({...state, tolerance : action.payload});
        case(RESET_STATE) :
            state = initialState;
            return state;
        default :
            return state;
    }
}