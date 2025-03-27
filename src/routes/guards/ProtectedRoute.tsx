import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

import { useEffect } from "react";
import { useAuth } from "../../hooks/auth/useAuth";

const ProtectedRoute = () => {
  const { isUserAuthenticated } = useAuth();

  useEffect(() => {
    if (!isUserAuthenticated) {
      toast.error("Please, log in first to access.");
    }
  }, [isUserAuthenticated]);

  if (!isUserAuthenticated) {
    return <Navigate to={"/login"} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
