import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [isLightTheme, setIsLightTheme] = useState(() => {
    const saved = localStorage.getItem("isLightTheme");
    return saved !== null ? JSON.parse(saved) : true;
  });
  useEffect(() => {
    localStorage.setItem("isLightTheme", JSON.stringify(isLightTheme));
    document.documentElement.setAttribute(
      "data-theme",
      isLightTheme ? "light" : "dark",
    );
  }, [isLightTheme]);
  const toggleTheme = () => setIsLightTheme((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isLightTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
