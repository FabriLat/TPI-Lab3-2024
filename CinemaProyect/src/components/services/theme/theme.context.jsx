import { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {

  const storedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(storedTheme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

//Colores degradado violeta: #634ac8, #000000

  useEffect(() => {
    if (theme === "dark") {
      document.body.style.backgroundColor = "black";
    } else {
      document.body.style.backgroundImage = "linear-gradient(to right, #000000, #494949)";
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
