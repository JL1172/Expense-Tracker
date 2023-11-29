import { useState } from "react"


export const useCurrent = (state) => {
    const [current,setCurrent] = useState("");
    const change = (version) => {
        setCurrent(version);
    }
    return [current,change];
}