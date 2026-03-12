import { useState } from "react";
import { headerNavData } from "../../data/headerNavData";
import { useScrolled } from "../../utils/scrolled";
import "../Header/Header.css";
import Logo from "./Logo/Logo";

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
        <Logo />
        <button className="burger" onClick={() => setClicked(!clicked)}>
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
          </ul>
        </nav>
      </div>
    </header>
  );
}
