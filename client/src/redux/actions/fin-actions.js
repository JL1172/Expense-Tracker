import { renderAnalytics } from "../../utils/axiosWithAuth";

export const SET_ANALYTICS = "SET_ANALYTICS";
export const CLEAR_MESSAGE_NO3 = "CLEAR_MESSAGE_NO3";
export const ANALYTIC_ERROR = "ANALYTIC_ERROR";
export const SET_ANALYTIC_STATE = "SET_ANALYTIC_STATE";

export const initiateFetchAnalytics = () => dispatch => {
    dispatch(clearMessage());
    renderAnalytics().then(res => {
        dispatch(setStateAnalytics(res.data)); 
    }).catch(err => {
        dispatch(errorMessage(err.response.data.message));
    })
}

const setStateAnalytics = (data) => {
    return {type : SET_ANALYTIC_STATE, payload : data}; 
}
const clearMessage = () => {
    return {type : CLEAR_MESSAGE_NO3}
}
const errorMessage = (message) => {
    return {type : ANALYTIC_ERROR, payload : message}
}