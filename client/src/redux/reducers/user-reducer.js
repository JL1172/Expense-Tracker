import { SPINNER_SET_ON, SWITCH_TO_HOME, SET_ERROR_DASH_MESSAGE, CLEAR_MESSAGES, TRANSFER_STATE, SET_ACTIVITY_STATE, FIRST_STEP_DELETE } from "../actions/user-actions"

const initialState = {
    user_username: "",
    user_info_income: "",
    user_assets: "",
    spinnerOn: false,
    homePage: false,
    errorMessage: "",

    activities: [],
    expenses: [],
    expenseTotal: 0,
    percentageOfIncome: 0,
    percentChange: 0,

    firstDelete: "",
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
        case (FIRST_STEP_DELETE):
            if (state.firstDelete === action.payload) {
                return ({ ...state, firstDelete: "" });
            } else {
                return ({ ...state, firstDelete: action.payload });
            }
        case (SET_ACTIVITY_STATE):
            const filteredExpenses = action.payload.filter(n => n.category_name === "expenses");
            let sum = 0; filteredExpenses.forEach(num => sum += num.activity_amount);
            let percentDifference = state.user_info_income - sum;
            let delta = (sum / state.user_info_income) * 100;
            return ({ ...state, activities: [action.payload], expenses: filteredExpenses, expenseTotal: sum, percentageOfIncome: percentDifference, percentChange: delta });
        default:
            return state;
    }
}