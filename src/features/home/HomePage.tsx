import { Box, useTheme } from "@mui/material";
import { useState } from "react";
import MainBody from "./MainBody";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

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
        <MainBody />
      </Box>
    </Box>
  );
}

export default HomePage;
