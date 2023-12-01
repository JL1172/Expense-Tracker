import { useState } from "react";
import { useLocalState } from "./useLocal"
import { useLocalState2 } from "./useLocal2";


export const useAll = (key1,key2, state1, state2,state3) => {
    const [routing, setRouting] = useLocalState(key1,state1); 
    const [toggleMenu, setToggleMenu] = useLocalState2(key2,state2);
    const [toggleProfile,setToggleProfile] = useState(state3);
    const changeMenu = () => {
        setToggleMenu(!toggleMenu);
    }
    const direct = (address) => {
        setRouting(address);
    }
    const makeProfileVisible = () => {
        setToggleProfile(!toggleProfile);
    }
    const signOut = (name) => {if (name === "Sign out") {localStorage.clear();}}
    return [routing,direct,toggleMenu,changeMenu,toggleProfile,makeProfileVisible,signOut];
}