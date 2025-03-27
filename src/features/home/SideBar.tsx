import { Info, Login } from "@mui/icons-material";
import { Box, Drawer, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/auth/useAuth";

const drawerWidth = 240;

interface SideBarProps {
  drawerOpen: boolean;
}

function SideBar({ drawerOpen }: SideBarProps) {
  const navigate = useNavigate();
  const { isUserAuthenticated } = useAuth();

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
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 1, p: 1, cursor: "pointer" }}
          onClick={() => navigate("/nutrition-info")} // Navigate to /nutrition-info
        >
          <Info />
          <Typography variant="body1">Nutrition Info</Typography>
        </Box>
        {!isUserAuthenticated && (
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 1, p: 1, cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            <Login />
            <Typography variant="body1">Login</Typography>
          </Box>
        )}
      </Box>
    </Drawer>
  );
}

export default SideBar;
