import { createContext } from "react";
import { AccessTokenView } from "../../types/auth/Auth";
import { UserView } from "../../types/user/User";

export interface UserContextType {
  user: UserView | undefined;
  login: (accessToken: AccessTokenView) => void;
  logout: () => void;
  isUserAuthenticated: boolean;
  isAdmin: boolean;
}

export const UserAuthContext = createContext<UserContextType | undefined>(undefined);
