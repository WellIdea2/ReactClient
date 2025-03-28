import { Group } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { Paths } from "../../../utils/constants";
import { StyledMenuItem } from "./SideBar";

const AdminMenuItems = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <StyledMenuItem
        color={isActive(Paths.All_USERS) ? "primary.main" : "inherit"}
        onClick={() => navigate(Paths.All_USERS)}
      >
        <Group />
        <Typography variant="body1">All Users</Typography>
      </StyledMenuItem>
    </>
  );
};

export default AdminMenuItems;
