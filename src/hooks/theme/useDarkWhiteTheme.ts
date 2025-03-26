import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../../context/theme/ThemeContext";

const useDarkWhiteTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useDarkWhiteTheme must be used within a ThemeProvider");
  }
  return context;
};

export default useDarkWhiteTheme;
