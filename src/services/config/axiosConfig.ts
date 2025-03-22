import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = { baseURL: import.meta.env.VITE_API_URL };
const instance = axios.create(config);

export default instance;
