import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { headerNavData } from "../../data/headerNavData";
import { useScrolled } from "../../utils/scrolled";
import "../Header/Header.css";
import DarkModeButton from "./components/DarkModeButton/DarkModeButton";
import Burger from "./components/Burger/Burger";

export default function Header() {
  const scrolled = useScrolled();
  const [clicked, setClicked] = useState(false);
  const location = useLocation();

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="header-inner">

        <Link to="/" className="logo" onClick={() => setClicked(false)}>
          <span>A</span>
          <span>P</span>
        </Link>

        <Burger toggle={setClicked} isClicked={clicked} />

        <nav className={`header-nav ${clicked ? "clicked" : ""}`}>
          <ul>
            {headerNavData.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`nav-item ${location.pathname === item.path && "clicked"}`}
                  onClick={() => setClicked(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <DarkModeButton />
          </ul>
        </nav>
      </div>
    </header>
  );
}