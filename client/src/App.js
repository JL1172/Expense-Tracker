import { Routes, Route, useNavigate } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SignIn from "./components/SignIn";
import {GlobalContext} from './contexts/Global';

export default function App() {
  const nav = useNavigate();
  const directory = (address) => {
    nav(address);
  }
  return (
    <div>
      <GlobalContext.Provider value={{ directory }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </GlobalContext.Provider>
    </div>
  )
}
