import { ChartBarIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { HeaderContext } from "../contexts/HeadContext";
import { Avatar } from '@mui/material';
import Content from "./Content";
import Account from "./Account";
import AddExpenseForm from './AddExpenseForm';
import FinancialActivity from "./FinancialActivity";
import { useNavigate } from 'react-router-dom';
import { useAll } from "./customHooks/useAll";
import { RoutingContext } from "../contexts/RoutingContext";


export default function SideBar() {
    const nav = useNavigate();
    const { data, initial } = useContext(HeaderContext);
    const [routing, direct, toggleMenu, changeMenu, toggleProfile, makeProfileVisible, signOut] = useAll("route", "menu", "Dashboard", false, false);
    const logout = (name) => { signOut(name); nav("/"); }

    const user = {
        name: data.user_username,
        email: data.user_username,
        icon: <Avatar onClick={makeProfileVisible} id="icon" sx={{ bgcolor: "#4F46E5" }}>{initial}</Avatar>
    };
    const navigation = [
        { name: 'Dashboard', path: 'content', current: true },
        { name: 'Financial Activity', path: 'fin-activity', current: false },
        { name: 'Add Expense', path: 'add-expense-form', current: false },
        { name: 'Account', path: 'account-information', current: false },
    ];
    const userNavigation = [
        { name: 'Your Profile', },
        { name: 'Sign out' },
    ];
    const ternaryFunction = (directive) => {
        if (directive === "Sign out") {
            logout(directive);
        } else {
            direct("Account");
        }
    }
    const advancedDirect = (directive) => {
        direct(directive);
        changeMenu();
    }
    return (
        <>
            <div id="heading">
                <span id="charContainer"><ChartBarIcon id="chart" />Smart Tracker</span>
                <div id="subHeading">
                    {navigation.map(n => {
                        return <div
                            onClick={() => direct(n.name)}
                            className={routing === n.name ? "dir active" : "dir"} key={n.path}>
                            {n.name}
                        </div>
                    })}
                    {user.icon}
                    <div className={toggleProfile ? "hidden-profile-drop" : "hidden-hidden"}>
                        {userNavigation.map(n => <div key={n.name} onClick={() => ternaryFunction(n.name)} className="profile-section">{n.name}</div>)}
                    </div>
                </div>
                <div id="hiddenMenu">
                    {!toggleMenu ? <Bars3Icon onClick={changeMenu} id="menu" />
                        : <XMarkIcon onClick={changeMenu} id="menu" />}
                </div>
            </div>
            <div className={!toggleMenu ? "content-menu" : "menu-drop"} >
                {navigation.map(n => {
                    return <div
                        className={routing === n.name ? "current item" : "item"}
                        onClick={() => advancedDirect(n.name)}
                        key={n.path}>
                        {n.name}
                    </div>
                })}
                <div id="bottomSection">
                    <div id="profile">
                        {user.icon}
                        @{user.name}
                    </div>
                    {userNavigation.map(n => {
                        return <div key={n.name} onClick={() => logout(n.name)} className="bottom-content">{n.name}</div>
                    })}
                </div>
            </div>
            <div id="lowerHalf">
                <h1>{routing}</h1>
            </div>
            {routing === "Dashboard" && <RoutingContext.Provider value = {{direct}}><Content /></RoutingContext.Provider>}
            {routing === "Account" && <Account />}
            {routing === "Financial Activity" && <RoutingContext.Provider value = {{direct}}><FinancialActivity /></RoutingContext.Provider>}
            {routing === "Add Expense" && <AddExpenseForm />}
        </>
    )
}
