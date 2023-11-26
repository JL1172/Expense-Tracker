import { useContext, useEffect, useState } from "react";
import { StyledInputs } from "../styles/StyledInputs";
import { GlobalContext } from "../contexts/Global";
import { connect } from "react-redux";
import { clearFormField, initiateRegister, registerChangeHandler } from "../redux/actions/login-register-actions";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import FallingSpinner from "./Spinner"; 
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Register(props) {
    const { directory } = useContext(GlobalContext);
    const [visible, setVisible] = useState(false);
    const changeVisibility = () => {
        setVisible(!visible);
    }
    const change = (e) => {
        props.registerChangeHandler({ name: e.target.name, value: e.target.value })
    }
    const nav = useNavigate();
    const advancedRegister = () => {
        const credentials = {
            user_username : props.data.registerUsername,
            user_password : props.data.registerPassword,
            user_info_income : props.data.registerIncome,
            user_assets : props.data.registerNetWorth
        }
        props.initiateRegister(credentials);
    }
    useEffect(()=>{
        if (props.data.loginPage) {
            nav("/login");
            props.clearFormField();
        }
    },[props.data.loginPage])
    return (
        <StyledInputs>
            {props.data.spinnerOn && <FallingSpinner /> }
            {!props.data.spinnerOn && <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Create an Account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit = {(e)=>e.preventDefault()} className="space-y-6">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                Username
                            </label>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    name="registerUsername"
                                    value={props.data.registerUsername}
                                    onChange={change}
                                    type="text"
                                    className="input-default block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="password-toggles mt-2">
                                <input
                                    onChange={(e) => change(e)}
                                    value={props.data.registerPassword}
                                    id="password"
                                    name="registerPassword"
                                    type = {visible ? "text" : "password"}
                                    className="input-default block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {visible ? <EyeIcon onClick={changeVisibility} className="icons" /> : <EyeSlashIcon onClick={changeVisibility} className="icons" />}
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Re-enter Password
                                </label>
                            </div>
                            <div className="password-toggles mt-2">
                                <input
                                    onChange={(e) => change(e)}
                                    value={props.data.register_reenter_password}
                                    id={
                                        props.data.registerPassword.length > 1 && props.data.registerPassword !== props.data.register_reenter_password ?
                                            "error" : ""
                                    }
                                    name="register_reenter_password"
                                    type = {visible ? "text" : "password"}
                                    className="input-default block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {visible ? <EyeIcon onClick={changeVisibility} className="icons" /> : <EyeSlashIcon onClick={changeVisibility} className="icons" />}
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="income" className="block text-sm font-medium leading-6 text-gray-900">
                                    Annual Income
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="income"
                                    onChange={(e) => change(e)}
                                    value={props.data.registerIncome}
                                    name="registerIncome"
                                    type="number"
                                    className="input-default block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="newWorth" className="block text-sm font-medium leading-6 text-gray-900">
                                    Net Worth (overall assets)
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="netWorth"
                                    onChange={(e) => change(e)}
                                    value={props.data.registerNetWorth}
                                    name="registerNetWorth"
                                    type="number"
                                    className="input-default block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                disabled = {props.data.registerPassword !== props.data.register_reenter_password}
                                onClick={advancedRegister}
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Create Account
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already a member?{' '}
                        <div style={{ cursor: "pointer" }} onClick={() => directory("/login")} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Sign in Here
                        </div>
                    </p>
                </div>
                <div id = "errorMessages">
                {props.data.errorArray && props.data.errorMessage.map(n => {
                    return <Alert className="alerts" severity="error">{n}</Alert>
                })}
                {!props.data.errorArray && props.data.errorMessage && <Alert className="alerts" severity="error">{props.data.errorMessage}</Alert>}
                </div>
            </div>}
        </StyledInputs>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.log_reg_state,
    }
}

export default connect(mapStateToProps, { registerChangeHandler, initiateRegister, clearFormField })(Register);