import { useContext, useEffect, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { StyledInputs } from "../styles/StyledInputs";
import { GlobalContext } from "../contexts/Global";
import { connect } from "react-redux";
import { clearFormField, initiateLogin, loginChangeHandler, switchToLogin } from "../redux/actions/login-register-actions";
import { Alert } from "@mui/material";
import FallingSpinner from "./Spinner";
import { useNavigate } from "react-router-dom";

function SignIn(props) {
  const nav = useNavigate();
  const { directory } = useContext(GlobalContext);
  const [visible, setVisible] = useState(false);
  const changeVisibility = () => {
    setVisible(!visible);
  }
  const change = (e) => {
    props.loginChangeHandler({ name: e.target.name, value: e.target.value })
  }
  const advancedLogin = () => {
    const insert = {
      user_username: props.data.loginUsername,
      user_password: props.data.loginPassword
    };
    props.initiateLogin(insert);
  }
  useEffect(() => {
    props.switchToLogin(false);
  }, [])//eslint-disable-line
  useEffect(() => {
    if (props.data.dashPage) {
      nav("/content-user-dashboard");
      props.clearFormField();
    } 
  }, [props.data.dashPage])//eslint-disable-line
  return (
    <StyledInputs>
      {props.data.successMessage && <Alert severity="success">{props.data.successMessage}</Alert>}
      {props.data.spinnerOn && <FallingSpinner />}
      {!props.data.spinnerOn && <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" >
            <div>
              <label htmlFor="loginUsername" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  onChange={change}
                  value={props.data.loginUsername}
                  id="loginUsername"
                  name="loginUsername"
                  type="text"
                  className="input-default block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="loginPassword" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="password-toggles mt-2">
                <input
                  onChange={(e) => change(e)}
                  value={props.data.loginPassword}
                  id="password"
                  name="loginPassword"
                  type={visible ? "text" : "password"}
                  className="input-default block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {visible ? <EyeIcon onClick={changeVisibility} className="icons" /> : <EyeSlashIcon onClick={changeVisibility} className="icons" />}
              </div>
            </div>

            <div>
              <button
                onClick={advancedLogin}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <div style={{ cursor: "pointer" }} onClick={() => directory("/register")} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Register Here
            </div>
          </p>
          {props.data.loginError && <Alert  severity="error">{props.data.loginError}</Alert>}
        </div>
      </div>}
    </StyledInputs>
  )
}

const mapStateToProps = state => {
  return {
    data: state.log_reg_state,
  }
}

export default connect(mapStateToProps, { switchToLogin, loginChangeHandler, initiateLogin, clearFormField })(SignIn);