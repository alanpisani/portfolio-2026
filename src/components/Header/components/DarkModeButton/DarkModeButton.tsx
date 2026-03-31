import "./DarkModeButton.css";
import { useTheme } from "../../../../hooks/useTheme";

export default function DarkModeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <input
      type="checkbox"
      onChange={() => setTheme(theme === "light" ? "dark" : "light")}
      className="darkmode-button"
      checked={theme === "light"}
    />
  );
}
