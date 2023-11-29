import { useState } from "react"


export const useCurrent = (state) => {
    const [current, setCurrent] = useState("");
    const change = (version) => {
        if (version === current) {
            setCurrent("");
        } else {
            setCurrent(version);
        }
    }
    return [current, change];
}