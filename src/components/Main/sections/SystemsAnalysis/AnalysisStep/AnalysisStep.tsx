import "../AnalysisStep/AnalysisStep.css";

interface AnalysisStepProps {
  title: string;
  description: string;
  diagram?: boolean;
}

export default function AnalysisStep(props: AnalysisStepProps) {
  return (
    <div className="analysis-step">
      <h3>{props.title}</h3>

      {props.diagram ? (
        <>
          <div className="architecture-diagram">
            <div className="arch-box">
              Frontend
              <br />
              React
            </div>
            <div className="arch-arrow">→</div>
            <div className="arch-box">
              API REST
              <br />
              .NET
            </div>
            <div className="arch-arrow">→</div>
            <div className="arch-box">Base de datos</div>
          </div>
          <p>{props.description}</p>
        </>
      ) : (
        <p>{props.description}</p>
      )}
    </div>
  );
}
