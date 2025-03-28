import { Box, useTheme } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router";
import NavBar from "./nav-bar/NavBar";
import SideBar from "./side-bar/SideBar";

function HomePage() {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(true);

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        color: theme.palette.text.primary,
        bgcolor: theme.palette.background.default,
      }}
    >
      <SideBar drawerOpen={drawerOpen} />
      <Box
        sx={{
          flexGrow: 1,
          ml: drawerOpen ? 0 : -30,
          display: "flex",
          flexDirection: "column",
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.standard,
          }),
        }}
      >
        <NavBar handleDrawerToggle={handleDrawerToggle} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;
