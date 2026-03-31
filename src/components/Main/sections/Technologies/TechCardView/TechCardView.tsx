import { motion } from "framer-motion";

import TechCard from "./TechCard/TechCard";
import type { techCardType } from "../../../../../types/TechCardType";
import "./TechCardView.css";

interface Props {
  data: techCardType[];
}

export default function TechCardView({ data }: Props) {
  return (
    <motion.div
      className="tech-grid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {data.map((branch, index) => (
        <TechCard branch={branch.branch} key={index} techs={branch.techs} />
      ))}
    </motion.div>
  );
}
