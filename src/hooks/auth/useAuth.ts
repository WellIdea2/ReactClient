import { useContext } from "react";
import { UserAuthContext } from "../../context/user-auth/UserAuthContext";

export function useAuth() {
  const context = useContext(UserAuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a ProjectsProvider");
  }
  return context;
}
