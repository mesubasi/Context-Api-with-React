import { useEffect, useState, createContext } from "react";

// Creating a context to share the theme state and functions with child components
const ThemeContext = createContext();

// ThemeContextProvider component to manage the application's theme
function ThemeContextProvider({ children }) {
  // State to keep track of the current theme
  const [themeName, setThemeName] = useState("light");

  // Function to handle theme toggling
  function handleTheme() {
    setThemeName((prev) => {
      // Toggling between "light" and "dark" themes
      const themeInfo = prev === "light" ? "dark" : "light";

      // Saving the theme preference in localStorage for persistence
      localStorage.setItem("theme", themeInfo);

      // Applying the theme change to the document
      changeTheme(themeInfo);

      // Returning the updated theme for state management
      return themeInfo;
    });
  }

  // Function to apply the selected theme to the document
  function changeTheme(themeName) {
    document.documentElement.setAttribute("data-bs-theme", themeName);
  }

  // Function to determine the preferred theme based on user settings or system preferences
  function getPreferredTheme() {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    }

    // Checking if the user prefers a dark color scheme
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  // useEffect hook to initialize the theme when the component mounts
  useEffect(() => {
    // Applying the preferred theme to the document and updating state
    changeTheme(getPreferredTheme());
    setThemeName(getPreferredTheme());
  }, []);

  // Providing the theme state and theme handling function to child components via context
  return (
    <ThemeContext.Provider value={{ themeName, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Exporting the ThemeContextProvider component and the ThemeContext for use in other parts of the application
export { ThemeContextProvider, ThemeContext };
