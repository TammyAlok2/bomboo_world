

// Then in your store, use this instance
import axios from "axios";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;//http://localhost:5000

const axiosInstance = axios.create();


axiosInstance.defaults.baseURL = API_URL;

// Include credentials (cookies) in requests from the localstorage token

// here i want to use the token from localstorage and set it in the headers of every request made by axiosInstance. This way, we can ensure that the token is sent with every request, allowing the server to authenticate the user properly.
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.defaults.withCredentials = true;

export default axiosInstance;