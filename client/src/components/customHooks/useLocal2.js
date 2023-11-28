
import { useState } from "react"


export const useLocalState2 = (key,state) => {
    const [route,setRoute] = useState(()=> {
        if (window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key));
        }
        window.localStorage.setItem(key, JSON.stringify(state));
        return state;
    });
    const change = (value) => {
        window.localStorage.setItem(key,JSON.stringify(value));
        setRoute(value);
    }
    return [route,change]; 
}