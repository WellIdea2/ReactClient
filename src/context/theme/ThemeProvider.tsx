import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import { ReactNode, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  function changeTheme(): boolean {
    const currentTheme = localStorage.getItem("theme");
    if (!currentTheme) {
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return currentTheme === "dark";
  }

  useEffect(() => {
    setIsDarkMode(changeTheme());
  }, []);

  const setDarkMode = () => {
    setIsDarkMode(true);
    localStorage.setItem("theme", "dark");
  };

  const setLightMode = () => {
    setIsDarkMode(false);
    localStorage.setItem("theme", "light");
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, setDarkMode, setLightMode }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
