import axios from "axios"
import { BASE_URL } from "../configs/config"


export const renderDashBoard = () => {
    const token = JSON.parse(window.localStorage.getItem("token"));
    const auth = axios.create({headers : {Authorization : token}})
    return auth.get(`${BASE_URL}/userInfo`);
}
