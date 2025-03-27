import { AccessTokenView } from "../../types/auth/Auth";

export const setAccessTokenInLocalStorage = (token: AccessTokenView) => {
  localStorage.setItem("floxie/accessToken", JSON.stringify(token));
};

export const getAccessTokenFromLocalStorage = (): AccessTokenView | null => {
  const storedJwtToken = localStorage.getItem("floxie/accessToken");
  return storedJwtToken ? JSON.parse(storedJwtToken) : null;
};

export const removeAccessTokenFromLocalStorage = () => {
  localStorage.removeItem("floxie/accessToken");
};
