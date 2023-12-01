import { combineReducers } from "redux";
import { log_reg_reducer } from "./login-register-reducer";
import { user_state } from "./user-reducer";
import {fin_state} from "./fin-reducer"
import { expense_add_state } from "./expense-add-reducer";


export const rootReducer = combineReducers({
    log_reg_state : log_reg_reducer,
    user_state : user_state,
    fin_state : fin_state,
    expense_state : expense_add_state,
})