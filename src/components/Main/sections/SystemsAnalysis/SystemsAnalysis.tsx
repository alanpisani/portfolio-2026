import { motion } from "framer-motion";
import "./SystemsAnalysis.css";
import { analysisStepData } from "../../../../data/analysisStepData";
import AnalysisStep from "./AnalysisStep/AnalysisStep";

export default function SystemsAnalysis() {
  return (
    <motion.section
      className="analysis-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="analysis-container">
        <h2>Análisis de sistemas</h2>

        <div className="analysis-flow">
          {analysisStepData.map((step, index) => (
            <AnalysisStep
              key={index}
              title={step.title}
              diagram={step.diagram}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
