import { useContext } from "react";

import { UserAuthContext } from "../../context/UserAuthProvider";

export function useAuth() {
  const context = useContext(UserAuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a ProjectsProvider");
  }
  return context;
}
