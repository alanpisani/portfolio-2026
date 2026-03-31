import type { techCardType } from "../../../../../../types/TechCardType";
import "../TechCard/techCard.css";

export default function TechCard(props: techCardType) {
  return (
    <div className="tech-card">
      <div className="tech-card-title-container">
        <h3>{props.branch}</h3>
      </div>

      <ul>
        {props.techs.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}
