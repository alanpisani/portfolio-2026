import { motion } from "framer-motion";
import Button from "../../../shared/Button/Button";
import "../Hero/Hero.css";
import TypedComponent from "./Typed/TypedComponent";
import img from "../../../../assets/img/perfil-cv.jpeg";

export default function Hero() {
  return (
    <motion.section
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: .7}}
        >
          <div className="hero-title-container">
            <h1>
              Soy Alan Pisani, <br />
              <TypedComponent />
            </h1>
            <p>Diseño y desarrollo software web orientado a negocio.</p>
          </div>
          <div className="hero-buttons">
            <Button text="Descargar CV" href="/cv/CV - Alan Pisani.pdf" isPrimary download/>
            <Button text="Ver CV" href="/cv/CV - Alan Pisani.pdf" />
          </div>
        </motion.div>

        <motion.div
          className="hero-img-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: .5 }}
        >
          <img src={img} alt="" />
        </motion.div>
      </div>
    </motion.section>
  );
}
