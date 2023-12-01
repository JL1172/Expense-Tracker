import { addExpense, readAllCategories } from "../../utils/axiosWithAuth";

export const SET_READ_ONLY_STATE = "SET_READ_ONLY_STATE";
export const CLOSE_EDIT = "CLOSE_EDIT";
export const VERIFY_TOLERANCE = "VERIFY_TOLERANCE";
export const ERROR_EXPENSE_ADDITION = "ERROR_EXPENSE_ADDITION";
export const SUCCESS_EXPENSE_ADDITION = "SUCCESS_EXPENSE_ADDITION";
export const HANDLE_INPUT_CHANGE = "HANDLE_INPUT_CHANGE";
export const SPINNER_EXPENSE = "SPINNER_EXPENSE";
export const RESET_STATE = "RESET_STATE";
export const EDIT_MODE = "EDIT_MODE";

export const handleInputChange = (bundle) => {
    return {type : HANDLE_INPUT_CHANGE, payload : bundle};
}

export const readOnlyCategoryFetchCall = () => dispatch => {
    dispatch(errorMessage(""));
    readAllCategories().then(res=> {
        const filter = res.data.filter(n => n.category_id === 1);
        dispatch(setReadOnlyState(filter));
    }).catch(err => {
        alert(err.response.data.message);
    })
}

export const initiateExpenseAddition = (newExpense) => dispatch => {
    dispatch(errorMessage(""));
    dispatch(spinnerExpenseOn(true));
    addExpense(newExpense).then(res => {
        dispatch(successMessage(true));
        dispatch(resetState())
    }).catch(err => {
        console.error(err)
        if (err.response.data.message.message) {
            dispatch(errorMessage(err.response.data.message.message));
            dispatch(verifyToleranceAllowed(true));
        } else {
            dispatch(errorMessage(err.response.data.message));
        }
    }).finally(()=> {
        setTimeout(()=> {
            dispatch(spinnerExpenseOn(false));
        },500)
    })
}

export const editTransactionInitiate = (editBody) => dispatch => {
    
}

export const enterEditMode = (data) => {
    return {type : EDIT_MODE, payload : data};
}

export const closeEditMode = (bool) => {
    return {type : CLOSE_EDIT, payload : bool};
}

const setReadOnlyState = (data) => {
    return {type : SET_READ_ONLY_STATE, payload : data};
}
const spinnerExpenseOn = (bool) => {
    return {type : SPINNER_EXPENSE, payload : bool}
}
export const successMessage = (bool) => {
    return {type : SUCCESS_EXPENSE_ADDITION, payload : bool}
}
const errorMessage = (message) => {
    return {type : ERROR_EXPENSE_ADDITION, payload : message}
}
const verifyToleranceAllowed = (bool) => {
    return {type : VERIFY_TOLERANCE, payload : bool}
}
export const resetState = () => {
    return {type : RESET_STATE}
}
/*
activity_description: 
activity_id: 
category_id: 
category_name: 
sub_category_id: 
sub_category_name: 
tolerance_accepted: 
*/