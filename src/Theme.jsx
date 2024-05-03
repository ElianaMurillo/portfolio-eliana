import React, { useEffect, createContext, useState } from "react";

const ThemeContext = createContext();

const getTheme = () => {
  const theme = localStorage.getItem("theme");
  if (theme) return theme; //early return
  localStorage.setItem("theme", "dark-theme");
  return "dark-theme";
};

const ThemeProvider = ({ children: childrenComponents }) => {
  const [theme, setTheme] = useState(getTheme);

  function toggleTheme() {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {childrenComponents}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
