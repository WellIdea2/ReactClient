import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/auth/useAuth";
import { Paths } from "../../utils/constants";

const AuthGuard = () => {
  const { isUserAuthenticated } = useAuth();

  if (!isUserAuthenticated) {
    return <Navigate to={Paths.LOGIN} replace />;
  }

  return <Outlet />;
};

export default AuthGuard;
