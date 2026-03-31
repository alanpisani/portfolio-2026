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
      <span className="keyword">
        export const <span className="variable">data</span>
        <span className="bracket"> = [</span>
      </span>
      <br />
      {data.map((tech) => (
        <TechCodeBlock
          key={tech.branch}
          branch={tech.branch}
          techs={tech.techs}
        />
      ))}

      <span className="bracket">]</span>
    </motion.pre>
  );
}
