import { connect } from "react-redux"
import { changeHandler, clearForm, clearMessages, closeEditMode, finalizePasswordChange, initiateRenderAccountInfo, initiateUpdateAccountInfo, setRoute } from "../redux/actions/account-actions"
import { useEffect, useState } from "react"
import { StyledAccount } from "../styles/StyledAccount";
import { UserIcon, CurrencyDollarIcon, FingerPrintIcon, EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Alert, Breadcrumbs, Button, TextField } from "@mui/material";
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';


const StyledBreadcrumb = styled(Chip)(({ theme }) => {

    const backgroundColor =
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
});
function Account(props) {
    const [visible, setVisible] = useState("");
    const changeVisibility = (text) => {
        setVisible(text);
    }
    useEffect(() => {
        props.initiateRenderAccountInfo();
    }, [])//eslint-disable-line
    // fin and pass
    const advancedAccountInfoUpdate = () => {
        const obj = {
            user_info_income : props.data.user_info_income,
            user_assets : props.data.user_assets,
        };
        props.initiateUpdateAccountInfo(obj); 
    }
    return (
        <StyledAccount>
            <div className="columnOne">
                <span style={{ display: "flex", alignItems: "center", marginBottom: ".5rem" }}><UserIcon style={{ width: "1.5rem", color: "#4f46e5" }} /> Personal Information</span>
                <div className="grayOutText">
                    {props.data.route === "fin" ? "You Can Change Your Financial Information Here" : "You Can Edit You Password Here"}
                </div>
            </div>
            <div className="columnTwo">
                <span className="fin-header">
                    {props.data.route === "fin" ? <CurrencyDollarIcon style={{ width: "2rem", color: "#4f46e5" }} /> : <FingerPrintIcon style={{ width: "2rem", color: "#4f46e5" }} />}
                    {props.data.route === "fin" ? "Financial Information" : "Edit Password"}</span>
                {props.data.route === "fin" ? <>
                    <TextField
                        className="inputs-fields"
                        id="outlined-number"
                        label="Income"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        name="user_info_income"
                        value={props.data.user_info_income}
                        onChange={(e) => props.changeHandler({ name: e.target.name, value: e.target.value })}
                    />
                    <TextField
                        className="inputs-fields"
                        id="outlined-number"
                        label="Total Assets"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        name="user_assets"
                        value={props.data.user_assets}
                        onChange={(e) => props.changeHandler({ name: e.target.name, value: e.target.value })}
                    />
                    {props.data.initiateEdit && <Button className="inputs-fields buttons" onClick={() => props.closeEditMode()} variant="outlined" >Restore Default Values</Button>}
                    {props.data.initiateEdit && <Button className="inputs-fields buttons" variant="contained" onClick={()=>advancedAccountInfoUpdate()} >Update Information</Button>}</>
                    :
                    <>
                        <div className="spans">
                            <TextField
                                className="inputs-fields-no2"

                                label="Old Password"
                                type={visible === "first" ? "text" : "password"}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                name="oldPassword"
                                value={props.data.oldPassword}
                                onChange={(e) => props.changeHandler({ name: e.target.name, value: e.target.value })}
                            />
                            {visible === "first" ? <EyeIcon onClick={() => changeVisibility("")} className="icons-eyes" /> : <EyeSlashIcon onClick={() => changeVisibility("first")} className="icons-eyes" />}
                        </div>
                        <div className="spans">
                            <TextField
                                className="inputs-fields-no2"

                                label="New Password"
                                type={visible === "second" ? "text" : "password"}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                name="newPassword"
                                value={props.data.newPassword}
                                onChange={(e) => props.changeHandler({ name: e.target.name, value: e.target.value })}
                            />
                            {visible === "second" ? <EyeIcon onClick={() => changeVisibility("")} className="icons-eyes" /> : <EyeSlashIcon onClick={() => changeVisibility("second")} className="icons-eyes" />}
                        </div>
                        <Button className="inputs-fields buttons" variant="contained" onClick={()=>props.finalizePasswordChange({newPassword : props.data.newPassword, oldPassword : props.data.oldPassword})}>Update Password</Button>
                        <Button onClick={() => props.clearForm()} className="inputs-fields buttons" variant="outlined" id = "cleared">Clear Form</Button>
                    </>
                }
            </div>
            <Breadcrumbs aria-label="breadcrumb" id="breadCrumb">
                <StyledBreadcrumb
                    onClick={() => props.setRoute("fin")}
                    label="Account Finances"
                    />
                <StyledBreadcrumb
                    onClick={() => props.setRoute("pass")}
                    label="Change Password"
                    />
            </Breadcrumbs>
                    {props.data.errorMessage.length > 0 && 
                    props.data.errorMessage.map((n,i)=> {
                        return <Alert className="alerts" key = {i} style={{ marginBottom: "2rem" }} severity="error">{n}</Alert>}
                    )}
                    {props.data.successMessage &&
                    <Alert className="alerts" style={{marginBottom : '2rem', height : "4rem", display : "flex", alignItems : "center"}} severity="success">{props.data.successMessage} <XMarkIcon onClick={()=>props.clearMessages()} id="x-out" style={{ width: "2rem" }} /></Alert>
                    }
        </StyledAccount>
    )
}

const mapStateToProps = state => {
    return {
        data: state.account_state,
    }
}

export default connect(mapStateToProps, { initiateRenderAccountInfo, closeEditMode, changeHandler, setRoute, clearForm, initiateUpdateAccountInfo, finalizePasswordChange, clearMessages })(Account);