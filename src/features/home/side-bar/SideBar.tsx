import { Box, Drawer, Typography, styled } from "@mui/material";
import { useAuth } from "../../../hooks/auth/useAuth";
import AdminMenuItems from "./AdminMenuItems";
import UserMenuItems from "./UserMenuItems";

const drawerWidth = 240;

export const StyledMenuItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  padding: theme.spacing(1),
  cursor: "pointer",
  borderRadius: theme.shape.borderRadius,
}));

interface SideBarProps {
  drawerOpen: boolean;
}

function SideBar({ drawerOpen }: SideBarProps) {
  const { isAdmin } = useAuth();

  return (
    <Drawer
      anchor="left"
      variant="persistent"
      open={drawerOpen}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          padding: 2,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" align="center" sx={{ mb: 4 }}>
          Floxie
        </Typography>
      </Box>

      {isAdmin ? <AdminMenuItems /> : <UserMenuItems />}
    </Drawer>
  );
}

export default SideBar;
