import { createContext } from "react";

export interface ThemeContextType {
  isDarkMode: boolean;
  setLightMode: () => void;
  setDarkMode: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
