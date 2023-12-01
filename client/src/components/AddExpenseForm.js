import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { StyledExpenseForm } from "../styles/StyledExpenseForm";

export default function AddExpenseForm() {
    return (
        <StyledExpenseForm>
            {/* updated to change dependent on if it is adding or updating */}
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
        //   value={age}
        //   onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
        </StyledExpenseForm>
    )
}