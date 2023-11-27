import { Routes, Route, useNavigate } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SignIn from "./components/SignIn";
import { GlobalContext } from './contexts/Global';
import Register from "./components/Register";
import ProtectRoute from "./protected/ProtectedRoute";
import Dashboard from "./components/Dashboard";
import { connect } from "react-redux";
import { clearMessage, switchToHome } from "./redux/actions/user-actions";
import { useEffect } from "react";

function App(props) {
  const nav = useNavigate();
  const directory = (address) => {
    nav(address);
  }
  useEffect(() => {
    props.switchToHome(false);
    props.clearMessage(); 
  }, [])

  return (
    <div>
      <GlobalContext.Provider value={{ directory }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/protected-route" element={<ProtectRoute />} />
          <Route path="/content-user-dashboard" element={<Dashboard />} />
        </Routes>
      </GlobalContext.Provider>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    data: state.log_reg_state,
    homePage: state.user_state.homePage,
  }
}


export default connect(mapStateToProps, { switchToHome, clearMessage })(App);
