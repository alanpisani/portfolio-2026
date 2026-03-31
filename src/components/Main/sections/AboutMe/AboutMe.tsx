import { motion } from "framer-motion";
import "../AboutMe/AboutMe.css";

import img from "../../../../assets/img/foto.webp";

export default function AboutMe() {
  return (
    <motion.section
      className="about-me-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="about-me">
        <motion.div
          className="about-me-img-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: .7 }}
        >
          <img src={img} alt=""/>
        </motion.div>
        <motion.div className="about-me-content" initial={{  opacity: 0}} animate={{ opacity: 1 }} transition={{ duration: 1, delay: .5 }}>
          <h2>Sobre mí</h2>
          <p>
            Como Analista de Sistemas, me interesa construir aplicaciones web que resuelvan problemas reales y aporten valor. Me enfoco en comprender los procesos detrás de cada proyecto, diseñar soluciones claras y organizadas, y llevarlas a la práctica con tecnologías como .NET y React, creando software mantenible y escalable.
          </p>
          <p>Busco involucrarme en proyectos donde pueda aportar desde el primer día, seguir aprendiendo y enfrentar desafíos reales, entregando soluciones concretas que conecten la tecnología con los objetivos del negocio.</p>
        </motion.div>
      </div>
    </motion.section>
  );
}
