import { Info, Login } from "@mui/icons-material";
import { Box, Drawer, Typography, styled } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../../hooks/auth/useAuth";
import { Paths } from "../../utils/constants";

const drawerWidth = 240;

const MenuItem = styled(Box)(({ theme }) => ({
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
  const navigate = useNavigate();
  const location = useLocation();
  const { isUserAuthenticated } = useAuth();

  const isActive = (path: string) => location.pathname === path;

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
        {/* Title Section */}
        <Typography variant="h6" align="center" sx={{ mb: 4 }}>
          Floxie
        </Typography>
        {/* Operations Section */}
        <MenuItem
          color={isActive(Paths.NUTRITION_INFO) ? "primary.main" : "inherit"}
          onClick={() => navigate(Paths.NUTRITION_INFO)}
        >
          <Info />
          <Typography variant="body1">Nutrition Info</Typography>
        </MenuItem>
        {!isUserAuthenticated && (
          <MenuItem
            color={isActive(Paths.LOGIN) ? "primary.main" : "inherit"}
            onClick={() => navigate(Paths.LOGIN)}
          >
            <Login />
            <Typography variant="body1">Login</Typography>
          </MenuItem>
        )}
      </Box>
    </Drawer>
  );
}

export default SideBar;
