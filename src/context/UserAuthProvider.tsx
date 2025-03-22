import { ReactNode, createContext } from "react";

interface UserContextType {
  user:  undefined;
  login: (jwtToken: undefined, refreshToken: undefined) => void;
  logout: () => void;
  isUserAuthenticated: boolean;
  isLoading: boolean;
  isAdmin: boolean;
  isMentor: boolean;
  isIntern: boolean;
}

export const UserAuthContext = createContext<UserContextType | undefined>(undefined);

export const UserAuthProvider = ({ children }: { children: ReactNode }) => {

  return (
    <UserAuthContext.Provider
      value={{
        user: undefined,
        login: (jwtToken: undefined, refreshToken: undefined) => {},
        logout: () => {},
        isUserAuthenticated: false,
        isLoading: false,
        isAdmin: false,
        isMentor: false,
        isIntern: false,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthProvider;
