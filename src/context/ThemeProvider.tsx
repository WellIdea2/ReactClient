import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import changeTheme from "../utils/shared/changeTheme";
import { ThemeOptions } from "../types/theme/Theme";

interface ThemeContextType {
  isDarkMode: boolean;
  setLightMode: () => void;
  setDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(changeTheme());
  }, []);

  const setDarkMode = () => {
    setIsDarkMode(true);
    document.body.className = ThemeOptions.DARK;
  };

  const setLightMode = () => {
    setIsDarkMode(false);
    document.body.className = ThemeOptions.LIGHT;
  };

  return <ThemeContext.Provider value={{ isDarkMode, setDarkMode, setLightMode }}>{children}</ThemeContext.Provider>;
};

const useDarkWhiteTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useDarkWhiteTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useDarkWhiteTheme };