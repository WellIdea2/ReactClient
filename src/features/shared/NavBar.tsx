import { Brightness4, Brightness7 } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import { useDarkWhiteTheme } from "../../hooks/custom/useDarkWhiteTheme";

function NavBar() {
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
    <AppBar position="static" style={{ backgroundColor: theme.palette.primary.main }}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Floxie</Typography>
        <div>
          <IconButton color="inherit" onClick={handleThemeChange}>
            {isDarkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
