import { useState } from "react";
import { technologiesData } from "../../../../data/technologiesData";
import "./Technologies.css";
import { motion } from "framer-motion";
import Button from "../../../shared/Button/Button";
import TechCardView from "./TechCardView/TechCardView";
import TechCodeBlockView from "./TechCodeBlockView/TechCodeBlockView";

export default function Technologies() {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.section
      className="tech-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="techs-container">
        <h2>Tecnologías</h2>
        <Button
          onClick={() => setToggle(!toggle)}
          text={toggle ? "Vista Código" : "Vista Tarjetas"}
        />
        {!toggle ? (
         <TechCodeBlockView data={technologiesData} />
        ) : (
          <TechCardView data={technologiesData}/>
        )}
      </div>
    </motion.section>
  );
}
