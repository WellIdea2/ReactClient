import { ReactNode, useMemo, useState } from "react";
import { AccessTokenView } from "../../types/auth/Auth";
import { UserRole, UserView } from "../../types/user/User";
import { getJwtExpiry, getUserFromJwt } from "../../utils/jwt/jwt-decoder";
import {
  getAccessTokenFromLocalStorage,
  removeAccessTokenFromLocalStorage,
  setAccessTokenInLocalStorage,
} from "../../utils/local-storage/jwt-token";
import { UserAuthContext } from "./UserAuthContext";

export const UserAuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserView | undefined>(() => {
    const accessToken: AccessTokenView | null = getAccessTokenFromLocalStorage();
    if (accessToken) {
      return getUserFromJwt(accessToken.token)!;
    }
    return undefined;
  });

  const [isUserAuthenticated, setIsUserAuthenticated] = useState<boolean>(() => {
    const accessToken: AccessTokenView | null = getAccessTokenFromLocalStorage();
    if (accessToken) {
      const expiry = getJwtExpiry(accessToken.token);
      return expiry ? expiry > new Date() : false;
    }
    return false;
  });

  const isAdmin = useMemo(() => user?.role === UserRole.ADMIN, [user?.role]);

  const login = (accessToken: AccessTokenView) => {
    setAccessTokenInLocalStorage(accessToken);
    const userData = getUserFromJwt(accessToken.token);
    const expiry = getJwtExpiry(accessToken.token);
    setUser(userData!);
    setIsUserAuthenticated(expiry ? expiry > new Date() : false);
  };

  const logout = () => {
    removeAccessTokenFromLocalStorage();
    setUser(undefined);
    setIsUserAuthenticated(false);
  };

  return (
    <UserAuthContext.Provider
      value={{
        user,
        login,
        logout,
        isUserAuthenticated,
        isAdmin,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthProvider;
