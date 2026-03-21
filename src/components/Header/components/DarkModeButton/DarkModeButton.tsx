import { useEffect, useState } from "react";
import "./DarkModeButton.css";

export default function DarkModeButton() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <input
      type="checkbox"
      onChange={() => setTheme(theme === "light" ? "dark" : "light")}
      className="darkmode-button"
      checked={theme === "light"}
    />
  );
}
