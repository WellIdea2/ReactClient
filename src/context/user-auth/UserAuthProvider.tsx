import { ReactNode, useEffect, useMemo, useState } from "react";
import { useGetUserDetailsProfileQuery } from "../../hooks/user-details/useGetUserDetailsProfileQuery";
import { useGetUserByIdQuery } from "../../hooks/user/useGetUserByIdQuery";
import { queryClient } from "../../services/config/queryClient";
import { AccessTokenView } from "../../types/auth/Auth";
import { UserRole } from "../../types/user/User";
import { getJwtExpiry, getUserFromJwt } from "../../utils/jwt/jwt-decoder";
import {
  getAccessTokenFromLocalStorage,
  removeAccessTokenFromLocalStorage,
  setAccessTokenInLocalStorage,
} from "../../utils/local-storage/jwt-token";
import { UserAuthContext } from "./UserAuthContext";

export const UserAuthProvider = ({ children }: { children: ReactNode }) => {
  const [userId, setUserId] = useState<string | undefined>(() => {
    const accessToken: AccessTokenView | null = getAccessTokenFromLocalStorage();
    if (accessToken) {
      const user = getUserFromJwt(accessToken.token);
      return user?.id;
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

  const { data: user, error, isSuccess } = useGetUserByIdQuery(userId);

  const { data: userDetail } = useGetUserDetailsProfileQuery(isSuccess);

  const isAdmin = useMemo(() => user?.role === UserRole.ADMIN, [user?.role]);

  const login = (accessToken: AccessTokenView) => {
    setAccessTokenInLocalStorage(accessToken);
    const userData = getUserFromJwt(accessToken.token);
    const expiry = getJwtExpiry(accessToken.token);
    setUserId(userData?.id);
    setIsUserAuthenticated(expiry ? expiry > new Date() : false);
  };

  const logout = () => {
    removeAccessTokenFromLocalStorage();
    setUserId(undefined);
    queryClient.clear();
    setIsUserAuthenticated(false);
  };

  useEffect(() => {
    if (error) {
      logout();
    }
  }, [error]);

  return (
    <UserAuthContext.Provider
      value={{
        user,
        userDetail,
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
