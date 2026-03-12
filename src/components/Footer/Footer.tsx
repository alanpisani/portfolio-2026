import "../Footer/Footer.css";
import { SiGithub, SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { useScrolled } from "../../utils/scrolled";

export default function Footer() {
  const actualYear = new Date().getFullYear();

  const scrolled = useScrolled();

  return (
    <footer className={scrolled ? "scrolled" : ""}>
      <div className="footer-inner">
        <p>© 2022 – {actualYear} Alan Pisani</p>
        <div className="footer-icons">
          <a
            href="https://github.com/alanpisani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub size={30} className="footer-icon" color="var(--text)" />
          </a>
          <a
            href="https://www.linkedin.com/in/alan-pisani/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} className="footer-icon" color="var(--text)" />
          </a>
          <a
            href="https://w.app/alanpisani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiWhatsapp size={30} className="footer-icon" color="var(--text)" />
          </a>
        </div>
      </div>
    </footer>
  );
}
