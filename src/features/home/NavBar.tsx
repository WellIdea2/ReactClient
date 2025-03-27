import { Brightness4, Brightness7, Menu } from "@mui/icons-material";
import { Avatar, Box, MenuItem, Menu as MuiMenu, useTheme } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/auth/useAuth";
import { useDarkWhiteTheme } from "../../hooks/custom/useDarkWhiteTheme";
import { Paths } from "../../utils/constants";
import StyledIconButton from "../shared/StyledIconButton";

interface NavBarProps {
  handleDrawerToggle: () => void;
}

function NavBar({ handleDrawerToggle }: NavBarProps) {
  const { isUserAuthenticated, logout } = useAuth();
  const { isDarkMode, setLightMode, setDarkMode } = useDarkWhiteTheme();
  const theme = useTheme();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleThemeChange = () => {
    if (isDarkMode) {
      setLightMode();
      localStorage.setItem("theme", "light");
    } else {
      setDarkMode();
      localStorage.setItem("theme", "dark");
    }
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
  };

  const handleProfileClick = () => {
    navigate(Paths.USER_PROFILE);
    handleMenuClose();
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
      <StyledIconButton color="inherit" onClick={handleDrawerToggle}>
        <Menu />
      </StyledIconButton>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <StyledIconButton color="inherit" onClick={handleThemeChange}>
          {isDarkMode ? <Brightness7 /> : <Brightness4 />}
        </StyledIconButton>
        {isUserAuthenticated && (
          <StyledIconButton onClick={handleMenuOpen}>
            <Avatar src={`https://i.pravatar.cc/150?u=${Math.random()}`} alt="User Avatar" />
          </StyledIconButton>
        )}
      </Box>
      <MuiMenu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem disabled>Username: John Doe</MenuItem>
        <MenuItem disabled>Email: johndoe@example.com</MenuItem>
        <MenuItem onClick={handleProfileClick}>View Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </MuiMenu>
    </Box>
  );
}

export default NavBar;
