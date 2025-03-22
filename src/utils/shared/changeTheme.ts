import { ThemeOptions } from "../../types/theme/Theme";

function changeTheme() {
  // Check if the user prefers dark mode
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.className = ThemeOptions.DARK;
    return true;
  } else {
    document.body.className = ThemeOptions.LIGHT;
    return false;
  }
}

export default changeTheme;
