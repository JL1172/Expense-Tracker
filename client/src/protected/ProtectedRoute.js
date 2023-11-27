import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FallingLines } from "react-loader-spinner";

export default function ProtectRoute() {
    const nav = useNavigate();
    useEffect(() => {
        if ((window.localStorage.getItem("token"))) {
            nav("/content-user-home");
        } else {
            console.log("hello world")
            setTimeout(() => {
                nav("/");
            }, 1000);
        }
    }, [])
    return (
        <div style={{ height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <FallingLines
                color="#4F46E5"
                width="100"
                visible={true}
                ariaLabel='falling-lines-loading'
            />
            Redirecting...
        </div>
    )
}