import { Alert, AlertTitle, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { StyledExpenseForm } from "../styles/StyledExpenseForm";
import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInputChange, initiateExpenseAddition, readOnlyCategoryFetchCall, successMessage } from "../redux/actions/expenseAdd-actions";
import FallingSpinner from "./Spinner";
import { XMarkIcon} from "@heroicons/react/24/outline";

function AddExpenseForm(props) {
    useEffect(() => {
        props.readOnlyCategoryFetchCall();
    }, []);
    const advancedSubmit = () => {
        const find = props.data.categories.find(n => n.sub_category_id === props.data.category_chosen);
        const postBody = {
            activity_description: props.data.activity_description,
            category_id: 1,
            category_name: "expenses",
            sub_category_id: props.data.category_chosen,
            sub_category_name: find.sub_category_name,
            activity_amount: props.data.activity_amount
        }
        props.initiateExpenseAddition(postBody);
    }
    const finalizeSubmit = () => {
        const find = props.data.categories.find(n => n.sub_category_id === props.data.category_chosen);
        const postBody = {
            activity_description: props.data.activity_description,
            category_id: 1,
            category_name: "expenses",
            sub_category_id: props.data.category_chosen,
            sub_category_name: find.sub_category_name,
            activity_amount: props.data.activity_amount,
            tolerance_accepted: true,
        }
        props.initiateExpenseAddition(postBody);
    }
    return (
        <StyledExpenseForm>
            {/* updated to change dependent on if it is adding or updating */}
            {props.data.successMessage &&
                <div>
                    <Alert severity="success" style={{position : "relative"}}>
                        <AlertTitle>Success</AlertTitle>
                        You expense was just added, go check it out in the activity tab!
                        <XMarkIcon onClick={()=>props.successMessage(false)} id = "x-out" style={{width : "1.5rem"}} />
                    </Alert>
                </div>
            }
            {props.data.spinnerOn ?
                <FallingSpinner />
                :
                !props.data.successMessage &&
                <div id="formGroup">
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={props.data.category_chosen}
                            label="Category"
                            onChange={(e) => props.handleInputChange({ name: "category_chosen", value: e.target.value })}
                        >
                            {props.data.categories.map((n, i) => {
                                return <MenuItem key={i} value={n.sub_category_id}>{n.sub_category_name}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                    <TextField
                        id="outlined-required" label="Description" value={props.data.activity_description} name="activity_description" onChange={(e) => props.handleInputChange({ name: e.target.name, value: e.target.value })} />
                    <TextField
                        id="outlined-number"
                        label="Amount"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        name="activity_amount"
                        value={props.data.activity_amount}
                        onChange={(e) => props.handleInputChange({ name: e.target.name, value: e.target.value })}
                    />
                    {props.data.tolerance ? <Button onClick={finalizeSubmit} variant="contained">Verify Amount</Button> :
                        <Button onClick={advancedSubmit} variant="contained" sx={{ height: "3rem" }}>Add Expense</Button>}
                </div>
            }
            {props.data.errorMessage && <Alert severity="error">{props.data.errorMessage}</Alert>}
        </StyledExpenseForm>
    )
}

const mapStateToProps = state => {
    return {
        data: state.expense_state,
    }
}

export default connect(mapStateToProps, { readOnlyCategoryFetchCall, handleInputChange, initiateExpenseAddition, successMessage })(AddExpenseForm);