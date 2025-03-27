import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/auth/useAuth";
import { Paths } from "../../utils/constants";

const FullAuthGuard = () => {
  const { isUserAuthenticated, userDetail } = useAuth();

  useEffect(() => {
    if (!isUserAuthenticated || !userDetail) {
      toast.info("Please finish your profile setup first.");
    }
  }, [isUserAuthenticated, userDetail]);

  if (!isUserAuthenticated || !userDetail) {
    return <Navigate to={Paths.USER_PROFILE} replace />;
  }

  return <Outlet />;
};

export default FullAuthGuard;
