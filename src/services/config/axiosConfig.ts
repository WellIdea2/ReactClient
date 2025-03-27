import axios, { AxiosRequestConfig } from "axios";
import { getJwtExpiry } from "../../utils/jwt/jwt-decoder";
import { getAccessTokenFromLocalStorage } from "../../utils/local-storage/jwt-token";

const config: AxiosRequestConfig = { baseURL: import.meta.env.VITE_API_URL };
const instance = axios.create(config);

instance.interceptors.request.use((request) => {
  const accessToken = getAccessTokenFromLocalStorage();
  if (accessToken != null) {
    const expiry = getJwtExpiry(accessToken.token);
    if (expiry && expiry > new Date()) {
      request.headers["Authorization"] = "Bearer " + accessToken.token;
    }
  }
  return request;
});

export default instance;
