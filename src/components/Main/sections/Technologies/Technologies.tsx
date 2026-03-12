import { technologiesData } from "../../../../data/technologiesData";
import TechCard from "./TechCard/TechCard";
import "./Technologies.css";
import { motion } from "framer-motion";

export default function Technologies() {
  return (
    <motion.section
      className="tech-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="tech-container">
        <h2>Tecnologías</h2>

        <div className="tech-grid">
          {technologiesData.map((branch, index) => (
            <TechCard branch={branch.branch} key={index} techs={branch.techs} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
