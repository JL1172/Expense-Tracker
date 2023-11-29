import axios from "axios"
import { BASE_URL } from "../configs/config"


export const renderDashBoard = () => {
    const token = JSON.parse(window.localStorage.getItem("token"));
    const auth = axios.create({ headers: { Authorization: token } })
    return auth.get(`${BASE_URL}/userInfo`);
}
export const renderExpenses = () => {
    const token = JSON.parse(window.localStorage.getItem("token"));
    const auth = axios.create({ headers: { Authorization: token } })
    return auth.get(`${BASE_URL}/activity`);
}

export const deleteExpense = (activity_id) => {
    const token = JSON.parse(window.localStorage.getItem("token"));
    const auth = axios.create({ headers: { Authorization: token } })
    return auth.delete(`${BASE_URL}/activity/${activity_id}`);
}

export const renderAnalytics = (query) => {
    if (query) {
        const token = JSON.parse(window.localStorage.getItem("token"));
        const auth = axios.create({ headers: { Authorization: token } });
        return auth.get(`${BASE_URL}/activity/categories?${query}`)
    } else {
        const token = JSON.parse(window.localStorage.getItem("token"));
        const auth = axios.create({ headers: { Authorization: token } });
        return auth.get(`${BASE_URL}/activity/categories`)
    }
}

