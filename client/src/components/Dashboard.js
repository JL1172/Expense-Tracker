import { useEffect } from "react"
import { connect } from "react-redux"
import { renderDashCall } from "../redux/actions/user-actions"
import { switchToDash } from "../redux/actions/login-register-actions";
import {useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import NotFound from "./NotFound";
import { ErrorContext } from "../contexts/Error";
import {HeaderContext} from "../contexts/HeadContext";
import { StyledDashBoard } from "../styles/StyledDashBoard";
import SideBar from "./SideBar";

function DashBoard(props) {
    const nav = useNavigate();
    useEffect(() => {
        props.switchToDash(false);
        props.renderDashCall();
    }, [])//eslint-disable-line
    useEffect(() => {
        if (props.homePage) {
            nav("/"); 
        }
    }, [props.homePage])//eslint-disable-line
    return (
        <div>
            {props.logSuccess && <Alert severity="success">{props.logSuccess}</Alert>}
            {props.data.errorMessage && <ErrorContext.Provider value={{ error: props.data.errorMessage }}><NotFound /></ErrorContext.Provider>}
            {!props.data.errorMessage &&
                <StyledDashBoard>
                    <HeaderContext.Provider value = {{data : props.data, initial : props.data.user_username[0]}}><SideBar /></HeaderContext.Provider>
                </StyledDashBoard>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        homePage: state.user_state.homePage,
        dashPage: state.log_reg_state.dashPage,
        logSuccess: state.log_reg_state.loginSuccess,
        data: state.user_state,
    }
}

export default connect(mapStateToProps, { renderDashCall, switchToDash })(DashBoard);