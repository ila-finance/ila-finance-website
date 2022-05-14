import axios from "axios";


export const api = axios.create({
    baseURL: "https://65rshzbuxpbl2hop5xvpx4dwqm0pfivo.lambda-url.ap-southeast-2.on.aws",
    headers: {
        "Content-Type": "application/json",
    },
})