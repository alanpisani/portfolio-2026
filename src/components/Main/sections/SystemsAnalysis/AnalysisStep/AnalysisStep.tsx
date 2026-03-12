import "../AnalysisStep/AnalysisStep.css";

interface AnalysisStepProps {
  title: string;
  description: string;
}

export default function AnalysisStep(props: AnalysisStepProps) {
  return (
    <div className="analysis-step">
      <h3>{props.title}</h3>

      <p>{props.description}</p>
    </div>
  );
}
