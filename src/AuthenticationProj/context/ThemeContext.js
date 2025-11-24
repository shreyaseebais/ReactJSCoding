import { createContext, useState, useEffect } from "react";

// Create the context
export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  // Check if theme saved in localStorage, otherwise default = light
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  // Save theme in browser storage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle between dark and light mode
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Apply theme to body for global styling
  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
