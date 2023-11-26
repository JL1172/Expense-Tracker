import axios from "axios";
import {BASE_URL} from "../configs/config";

export const login = (credentials) => {
    return axios.post(`${BASE_URL}/auth/login`,credentials);
}

export const register = (credentials) => {
    return axios.post(`${BASE_URL}/auth/register`,credentials);
}