import axios from "axios";


export const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {
        "Content-Type": "application/json",
    },
    params: {
        code: process.env.REACT_APP_API_KEY
    }
})