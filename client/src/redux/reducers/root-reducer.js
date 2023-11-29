import { combineReducers } from "redux";
import { log_reg_reducer } from "./login-register-reducer";
import { user_state } from "./user-reducer";
import {fin_state} from "./fin-reducer"


export const rootReducer = combineReducers({
    log_reg_state : log_reg_reducer,
    user_state : user_state,
    fin_state : fin_state
})