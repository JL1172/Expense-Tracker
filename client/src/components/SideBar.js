import { ChartBarIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { HeaderContext } from "../contexts/HeadContext";
import { Avatar } from '@mui/material';
import Content from "./Content";
import Account from "./Account";
import AddExpenseForm from './AddExpenseForm';
import FinancialActivity from "./FinancialActivity";
import { useLocalState } from "./customHooks/useLocal";
import { useLocalState2 } from "./customHooks/useLocal2";
import { useNavigate } from 'react-router-dom';


export default function SideBar() {
    const nav = useNavigate();
    const { data, initial } = useContext(HeaderContext);
    const [routing, setRouting] = useLocalState("route", "Dashboard");
    const [toggleMenu, setToggleMenu] = useLocalState2("menu", false);
    const changeMenu = () => {
        setToggleMenu(!toggleMenu);
    }
    const direct = (address) => {
        setRouting(address);
    }
    const signOut = (name) => {
        if (name === "Sign out") {
            nav("/");
            window.localStorage.clear();
        }
    }

    const user = {
        name: data.user_username,
        email: data.user_username,
        icon: <Avatar id="icon" sx={{ bgcolor: "#4F46E5" }}>{initial}</Avatar>

    }
    const navigation = [
        { name: 'Dashboard', path: 'content', current: true },
        { name: 'Financial Activity', path: 'fin-activity', current: false },
        { name: 'Add Expense', path: 'add-expense-form', current: false },
        { name: 'Account', path: 'account-information', current: false },
    ]
    const userNavigation = [
        { name: 'Your Profile', },
        { name: 'Sign out' },
    ]

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
                </div>
                <div id="hiddenMenu">
                    {!toggleMenu ? <Bars3Icon onClick={changeMenu} id="menu" />
                        : <XMarkIcon onClick={changeMenu} id="menu" />}
                </div>
            </div>
        </>
    )
}
