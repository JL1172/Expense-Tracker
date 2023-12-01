import { renderDashBoard, updateAccountInfo, updatePassword } from "../../utils/axiosWithAuth";
export const CLEAR_ALL_MESSAGES = "CLEAR_ALL_MESSAGES";
export const CHANGE_HANDLER = "CHANGE_HANDLER";
export const ERROR_MESSAGE = "ERROR_MESSAGE";
export const SET_STATE = "SET_STATE";
export const CLOSE_EDIT = "CLOSE_EDIT";
export const SET_ROUTE = "SET_ROUTE";
export const CLEAR_ALL_FORM = "CLEAR_ALL_FORM";
export const SUCCESS_MESS = "SUCCESS_MESS";

export const initiateRenderAccountInfo = () => dispatch => {
    dispatch(clearMessages());
    renderDashBoard().then(res => {
        dispatch(setState(res.data));
    }).catch((err) => {
        console.log(err);
        alert(err.response.data.message);
    })
}
export const initiateUpdateAccountInfo = (updatedBody) => dispatch => {
    dispatch(clearMessages());
    updateAccountInfo(updatedBody).then(res=> {
        dispatch(closeEditMode());
    }).catch(err=> {
        dispatch(setError(err.response.data.message)); 
    })
}
export const finalizePasswordChange = (updatedPasswordBody) => dispatch => {
    dispatch(clearMessages());
    updatePassword(updatedPasswordBody).then(res=> {
        dispatch(success(res.data.message));
        dispatch(clearForm());
    }).catch(err => {
        dispatch(setError(err.response.data.message.error));
    })
}
export const changeHandler = (values) => {
    return { type: CHANGE_HANDLER, payload: values }
}
export const closeEditMode = () => dispatch => {
    dispatch(finalizeEdit());
    dispatch(initiateRenderAccountInfo()); 
}
const finalizeEdit = () => {
    return { type: CLOSE_EDIT };
}
const setState = (data) => {
    return { type: SET_STATE, payload: data };
}
export const clearMessages = () => {
    return { type: CLEAR_ALL_MESSAGES };
}
const setError = (message) => {
    return {type : ERROR_MESSAGE, payload : message};
}
export const setRoute = (name) => {
    return {type : SET_ROUTE, payload : name};
}
export const clearForm = () => {
    return {type : CLEAR_ALL_FORM};
}
const success = (message) => {
    return {type : SUCCESS_MESS, payload : message }
}