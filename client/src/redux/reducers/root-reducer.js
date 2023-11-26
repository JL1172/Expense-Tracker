import { combineReducers } from "redux";
import { log_reg_reducer } from "./login-register-reducer";


export const rootReducer = combineReducers({
    log_reg_state : log_reg_reducer,
})