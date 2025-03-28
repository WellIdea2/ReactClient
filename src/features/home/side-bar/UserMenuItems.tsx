import { Info, Login, RestaurantMenu } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../../../hooks/auth/useAuth";
import { Paths } from "../../../utils/constants";
import { StyledMenuItem } from "./SideBar";

const UserMenuItems = () => {
  const { isUserAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <StyledMenuItem
        color={isActive(Paths.NUTRITION_INFO) ? "primary.main" : "inherit"}
        onClick={() => navigate(Paths.NUTRITION_INFO)}
      >
        <Info />
        <Typography variant="body1">Nutrition Info</Typography>
      </StyledMenuItem>
      {isUserAuthenticated && (
        <StyledMenuItem
          color={isActive(Paths.NUTRI_BUDDY) ? "primary.main" : "inherit"}
          onClick={() => navigate(Paths.NUTRI_BUDDY)}
        >
          <RestaurantMenu />
          <Typography variant="body1">NutriBuddy</Typography>
        </StyledMenuItem>
      )}
      {!isUserAuthenticated && (
        <StyledMenuItem
          color={isActive(Paths.LOGIN) ? "primary.main" : "inherit"}
          onClick={() => navigate(Paths.LOGIN)}
        >
          <Login />
          <Typography variant="body1">Login</Typography>
        </StyledMenuItem>
      )}
    </>
  );
};

export default UserMenuItems;
