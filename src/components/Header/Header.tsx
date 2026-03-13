import { useState } from "react";
import { headerNavData } from "../../data/headerNavData";
import { useScrolled } from "../../utils/scrolled";
import "../Header/Header.css";
import DarkModeButton from "./DarkModeButton/DarkModeButton";

interface HeaderProps {
  onNavigate: (algo: string) => void;
  currentSession: string;
}

export default function Header(props: HeaderProps) {
  const scrolled = useScrolled();
  const [clicked, setClicked] = useState(false);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="header-inner">
        <button className="logo" onClick={() => props.onNavigate("Inicio")}>
          <span>A</span>
          <span>P</span>
        </button>
        <button
          className={`burger ${clicked ? "clicked" : ""}`}
          onClick={() => setClicked(!clicked)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`header-nav ${clicked ? "clicked" : ""}`}>
          <ul>
            {headerNavData.map((item, index) => (
              <li key={index}>
                <button
                  className={`nav-item ${props.currentSession === item.name ? "clicked" : ""}`}
                  onClick={() => {
                    props.onNavigate(item.name);
                    setClicked(false);
                  }}
                >
                  {item.name}
                </button>
              </li>
            ))}
            <DarkModeButton />
          </ul>
        </nav>
      </div>
    </header>
  );
}
