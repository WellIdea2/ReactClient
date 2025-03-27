import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/auth/useAuth";
import { Paths } from "../../utils/constants";

const GuestGuard = () => {
  const { isUserAuthenticated } = useAuth();

  if (isUserAuthenticated) {
    return <Navigate to={Paths.HOME} replace />;
  }

  return <Outlet />;
};

export default GuestGuard;
