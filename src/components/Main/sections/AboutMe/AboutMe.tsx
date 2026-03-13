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
          <img src={img} alt="" loading="eager" decoding="async"/>
        </motion.div>
        <motion.div className="about-me-content" initial={{  opacity: 0}} animate={{ opacity: 1 }} transition={{ duration: 1, delay: .5 }}>
          <h2>Sobre mí</h2>
          <p>
            Como Analista de Sistemas, siempre me interesó cómo construir
            aplicaciones que realmente resuelvan problemas y aporten valor. Me
            gusta entender los procesos detrás de cada proyecto, pensar en
            soluciones claras y organizadas, y luego llevarlas a la práctica
            construyendo software web que sea fácil de mantener y escalar.
            <br />
            <br /> Hoy busco involucrarme en proyectos donde pueda aportar desde
            el primer día, seguir creciendo y enfrentar problemas reales,
            aportando soluciones concretas y bien pensadas que conecten la
            tecnología con los objetivos del negocio.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
