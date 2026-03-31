import { motion } from "framer-motion";
import type { techCardType } from "../../../../../types/TechCardType";
import TechCodeBlock from "./TechCodeBlock/TechCodeBlock";
import "./TechCodeBlockView.css";

interface Props {
  data: techCardType[];
}

export default function TechCardView({ data }: Props) {
  return (
    <motion.pre
      className="code-block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <span className="export-color">export</span>
      <span className="keyword"> const </span>
      <span className="variable">data: </span>
      <span className="type-color">
        techType<span className="yellow-bracket">[]</span>
      </span>
      
      <span className="bracket"> = </span>
      <span className="yellow-bracket">[</span>

      <br />
      {data.map((tech) => (
        <TechCodeBlock
          key={tech.branch}
          branch={tech.branch}
          techs={tech.techs}
        />
      ))}

      <span className="yellow-bracket">]</span>
      <span className="bracket">;</span>
    </motion.pre>
  );
}
