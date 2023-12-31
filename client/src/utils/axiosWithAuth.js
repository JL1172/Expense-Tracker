import axios from "axios"
import { BASE_URL } from "../configs/config"


export const renderDashBoard = () => {
    const token = JSON.parse(window.localStorage.getItem("token"));
    const auth = axios.create({ headers: { Authorization: token } })
    return auth.get(`${BASE_URL}/userInfo`);
}
export const updateAccountInfo = (updated) => {
    const token = JSON.parse(window.localStorage.getItem("token"));
    const auth = axios.create({ headers: { Authorization: token } })
    return auth.put(`${BASE_URL}/userInfo/financial`,updated);
}
export const updatePassword = (updatedBody) => {
    const token = JSON.parse(window.localStorage.getItem("token"));
    const auth = axios.create({ headers: { Authorization: token } })
    return auth.put(`${BASE_URL}/userInfo/credentials`,updatedBody);
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

export const readAllCategories = () => {
    const token = JSON.parse(window.localStorage.getItem("token"));
    const auth = axios.create({ headers: { Authorization: token } });
    return auth.get(`${BASE_URL}/activity/read-only-categories`)
}

export const addExpense = (postBody) => {
    const token = JSON.parse(window.localStorage.getItem("token"));
    const auth = axios.create({ headers: { Authorization: token } });
    return auth.post(`${BASE_URL}/activity`,postBody)
}

export const updateExpense = (putBody) => {
    const token = JSON.parse(window.localStorage.getItem("token"));
    const auth = axios.create({ headers: { Authorization: token } });
    return auth.put(`${BASE_URL}/activity`,putBody); 
}
