import { deleteExpense, renderAnalytics } from "../../utils/axiosWithAuth";
import {setActivityState} from "./user-actions";
export const SET_ANALYTICS = "SET_ANALYTICS";
export const HANDLE_CHANGE_RADIO = "HANDLE_CHANGE_RADIO";
export const FILTER_ON_TWO = "FILTER_ON_TWO";
export const CLEAR_MESSAGE_NO3 = "CLEAR_MESSAGE_NO3";
export const ANALYTIC_ERROR = "ANALYTIC_ERROR";
export const SET_ANALYTIC_STATE = "SET_ANALYTIC_STATE";
export const FILTER_ON = "FILTER_ON";
export const SET_ALL_CATEGORIES = "SET_ALL_CATEGORIES";

export const initiateFetchAnalytics = (query) => dispatch => {
    dispatch(setFilterOn(false));
    dispatch(handleRadioChange(""));
    if (query) {
        dispatch(clearMessage());
        renderAnalytics(query).then(res => {
            dispatch(setActivityState(res.data)); 
        }).catch(err => {
            dispatch(errorMessage(err.response.data.message));
        }).finally(()=>dispatch(setFilterOn(true)))
    } else {
        dispatch(clearMessage());
        renderAnalytics().then(res => {
            dispatch(setStateAnalytics(res.data));
        }).catch(err => {
            dispatch(errorMessage(err.response.data.message));
        })
    }
}

export const initiateFetchAllCategories = () => dispatch => {
    dispatch(setFilterOn(false)) // might be an issue  
    dispatch(clearMessage()); 
    dispatch(setFilterOn2(true));
}


const setFilterOn2 = (bool) => {
    return {type : FILTER_ON_TWO, payload : bool};
}
const setFilterOn = (bool) => {
    return{type : FILTER_ON, payload : bool}
}
const setStateAnalytics = (data) => {
    return { type: SET_ANALYTIC_STATE, payload: data };
}
const clearMessage = () => {
    return { type: CLEAR_MESSAGE_NO3 }
}
export const errorMessage = (message) => {
    return { type: ANALYTIC_ERROR, payload: message }
}
export const setAllCategories = (data) => {
    return {type : SET_ALL_CATEGORIES, payload : data}
}
export const handleRadioChange = (value) => {
    return {type : HANDLE_CHANGE_RADIO, payload : value}
}