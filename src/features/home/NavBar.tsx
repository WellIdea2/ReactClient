import { Brightness4, Brightness7, Menu } from "@mui/icons-material";
import { Box, IconButton, useTheme } from "@mui/material";
import { useDarkWhiteTheme } from "../../hooks/custom/useDarkWhiteTheme";

interface NavBarProps {
  handleDrawerToggle: () => void;
}

function NavBar({ handleDrawerToggle }: NavBarProps) {
  const { isDarkMode, setLightMode, setDarkMode } = useDarkWhiteTheme();
  const theme = useTheme();

  const handleThemeChange = () => {
    if (isDarkMode) {
      setLightMode();
      localStorage.setItem("theme", "light");
    } else {
      setDarkMode();
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 2,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <IconButton
        color="inherit"
        onClick={handleDrawerToggle}
        sx={{
          outline: "none",
          "&:focus": {
            outline: "none",
          },
        }}
      >
        <Menu />
      </IconButton>
      <IconButton
        color="inherit"
        onClick={handleThemeChange}
        sx={{
          outline: "none",
          "&:focus": {
            outline: "none",
          },
        }}
      >
        {isDarkMode ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Box>
  );
}

export default NavBar;
