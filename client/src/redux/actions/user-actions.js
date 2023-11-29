import { deleteExpense, renderDashBoard, renderExpenses } from "../../utils/axiosWithAuth";
export const FIRST_STEP_DELETE = "FIRST_STEP_DELETE";
export const SET_ACTIVITY_STATE = "SET_ACTIVITY_STATE";
export const SWITCH_TO_HOME = "SWITCH_TO_HOME";
export const RENDER_DASHBOARD = "RENDER_DASHBOARD";
export const SPINNER_SET_ON = "SPINNER_SET_ON";
export const TRANSFER_STATE = "TRANSFER_STATE";
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
export const CLEAR_MESSAGES = "CLEAR_MESSAGES";
export const SET_ERROR_DASH_MESSAGE = "SET_ERROR_DASH_MESSAGE";


export const renderDashCall = () => dispatch => {
    dispatch(spinnerOn(true));
    dispatch(clearMessage());
    renderDashBoard().then(res => {
        dispatch(setDashState(res.data));
    }).catch(err => {
        console.log(err)
        dispatch(errorMessage(err.response.data.message));
        setTimeout(() => {
            dispatch(switchToHome(true));
        }, 2000)
    }).finally(() => {
        setTimeout(() => {
            dispatch(spinnerOn(false));
        }, 500);
    })
}
export const renderExpensesCall = () => dispatch => {
    dispatch(clearMessage());
    renderExpenses().then(res => {
        dispatch(setActivityState(res.data)); 
    }).catch(err => {
        dispatch(errorMessage(err.response.data.message));
    })
}

export const finalizeDelete = () => dispatch => {
    dispatch(clearMessage());
    deleteExpense().then(res => {
        console.log(res);
        dispatch(renderDashCall());
        dispatch(renderExpensesCall());
    }).catch(err => {
        console.error(err);
        dispatch(errorMessage(err.response.data.message));
        alert(err.response.data.message); 
    })
}

const setActivityState = (data) => {
    return {type : SET_ACTIVITY_STATE, payload : data};
}

const spinnerOn = (bool) => {
    return { type: SPINNER_SET_ON, payload: bool };
}


const errorMessage = (message) => {
    return { type: SET_ERROR_DASH_MESSAGE, payload: message };
}

export const switchToHome = (bool) => {
    return { type: SWITCH_TO_HOME, payload: bool };
}

export const clearMessage = () => {
    return { type: CLEAR_MESSAGES }
}
const setDashState = (dataFromApi) => {
    return { type: TRANSFER_STATE, payload: dataFromApi };
}

export const firstStepDelete = (index) => {
    console.log("hello")
    return {type : FIRST_STEP_DELETE, payload : index}
}