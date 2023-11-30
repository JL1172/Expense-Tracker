import { readAllCategories, renderAnalytics } from "../../utils/axiosWithAuth";
import {setActivityState} from "./user-actions";
export const SET_ANALYTICS = "SET_ANALYTICS";
export const FILTER_ON_TWO = "FILTER_ON_TWO";
export const CLEAR_MESSAGE_NO3 = "CLEAR_MESSAGE_NO3";
export const ANALYTIC_ERROR = "ANALYTIC_ERROR";
export const SET_ANALYTIC_STATE = "SET_ANALYTIC_STATE";
export const FILTER_ON = "FILTER_ON";
export const SET_ALL_CATEGORIES = "SET_ALL_CATEGORIES";

export const initiateFetchAnalytics = (query) => dispatch => {
    dispatch(setFilterOn(false));
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
    readAllCategories().then(res => { 
        dispatch(setAllCategories(res.data));
        dispatch(setFilterOn2(true))
    }).catch(err => {
        dispatch(errorMessage(err.response.data.message)); 
    })
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
const errorMessage = (message) => {
    return { type: ANALYTIC_ERROR, payload: message }
}
export const setAllCategories = (data) => {
    return {type : SET_ALL_CATEGORIES, payload : data}
}