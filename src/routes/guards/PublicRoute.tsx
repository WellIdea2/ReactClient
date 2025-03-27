import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/auth/useAuth";

const PublicRoute = () => {
  const { isUserAuthenticated } = useAuth();

  if (isUserAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
