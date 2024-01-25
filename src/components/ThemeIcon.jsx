import { useContext } from "react";
import { darkTheme, lightTheme } from "./Icons";
import { ThemeContext } from "../context/ThemeContext";

// ThemeIcon component to display a button for toggling between light and dark themes
function ThemeIcon() {
  // Accessing theme information and handling function from the ThemeContext
  const { themeName, handleTheme } = useContext(ThemeContext);

  // Logging the current theme for debugging purposes
  console.log(themeName);

  return (
    <>
      {/* Rendering a button based on the current theme */}
      {themeName === "light" ? (
        <button onClick={handleTheme} className="btn">
          {lightTheme} Light
        </button>
      ) : (
        <button onClick={handleTheme} className="btn">
          {darkTheme} Dark
        </button>
      )}
    </>
  );
}

export default ThemeIcon;
