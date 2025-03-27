import { Dashboard, Settings } from "@mui/icons-material";
import { Box, Drawer, Typography } from "@mui/material";

const drawerWidth = 240;

interface SideBarProps {
  drawerOpen: boolean;
}

function SideBar({ drawerOpen }: SideBarProps) {
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
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, p: 1, cursor: "pointer" }}>
          <Dashboard />
          <Typography variant="body1">Dashboard</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, p: 1, cursor: "pointer" }}>
          <Settings />
          <Typography variant="body1">Settings</Typography>
        </Box>
      </Box>
    </Drawer>
  );
}

export default SideBar;
