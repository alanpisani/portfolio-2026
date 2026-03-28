import "../Footer/Footer.css";

import { useScrolled } from "../../utils/scrolled";
import { footerData } from "../../data/footerData";

export default function Footer() {
  const actualYear = new Date().getFullYear();

  const scrolled = useScrolled();

  return (
    <footer className={scrolled ? "scrolled" : ""}>
      <div className="footer-inner">
        <p>© Alan Pisani 2022 – {actualYear} </p>
        <div className="footer-icons">
          {footerData.map((icon, index) => (
            <a
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <icon.icon size={30} className="footer-icon" color="var(--text)" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
