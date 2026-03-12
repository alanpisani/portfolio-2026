import type { techCardType } from "../../../../../types/TechCardType";
import "../TechCard/techCard.css"

export default function TechCard(props: techCardType) {
  return (
    <div className="tech-card">
      <h3>{props.branch}</h3>
      <ul>
        {props.techs.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}
