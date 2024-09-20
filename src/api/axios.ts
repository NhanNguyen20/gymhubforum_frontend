import axios from "axios";
// const BASE_URL = process.env.NEXT_PUBLIC_API_ENDPOINT;
const BASE_URL = "http://localhost:8080";
// const BASE_URL = "https://java-163.ocopee.com"
// const BASE_URL = "http://14.241.129.58:8081"

export default axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
    },
});