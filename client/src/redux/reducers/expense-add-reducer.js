import { CLOSE_EDIT, EDIT_MODE, ERROR_EXPENSE_ADDITION, HANDLE_INPUT_CHANGE, RESET_STATE, SET_READ_ONLY_STATE, SPINNER_EXPENSE, SUCCESS_EXPENSE_ADDITION, VERIFY_TOLERANCE } from "../actions/expenseAdd-actions";

const initialState = {
    categories: [],
    errorMessage: "",
    successMessage: false,
    spinnerOn: false,
    tolerance: false,
    
    edit_mode_state: false,
    activity_amount: "",
    activity_id : "",
    category_chosen: "",
    activity_description: "",
    sub_category_id : "",
    sub_category_name  :"",
    created_at : "",
    user_id : "",
    user_username : ""
}

export const expense_add_state = (state = initialState, action) => {
    switch (action.type) {
        case (SET_READ_ONLY_STATE):
            return ({ ...state, categories: action.payload });
        case (HANDLE_INPUT_CHANGE):
            return ({ ...state, [action.payload.name]: action.payload.value });
        case (SPINNER_EXPENSE):
            return ({ ...state, spinnerOn: action.payload });
        case (SUCCESS_EXPENSE_ADDITION):
            return ({ ...state, successMessage: action.payload });
        case (ERROR_EXPENSE_ADDITION):
            return ({ ...state, errorMessage: action.payload });
        case (VERIFY_TOLERANCE):
            return ({ ...state, tolerance: action.payload });
        case (EDIT_MODE):
            console.log("INITIATING EDIT");
            const { activity_amount, activity_description,
                activity_id, created_at,
                sub_category_id, sub_category_name, user_id, user_username }
                = action.payload;
            return ({ ...state, edit_mode_state: true, activity_amount : activity_amount, activity_id : activity_id,
            category_chosen : sub_category_id, activity_description : activity_description,
            sub_category_name : sub_category_name, category_name : "expenses", 
            category_id : 1, created_at : created_at, user_id : user_id, user_username : user_username
            });
        case (RESET_STATE):
            state = initialState;
            return state;
        case(CLOSE_EDIT) :
            return({...state, edit_mode_state : action.payload});
        default:
            return state;
    }
}