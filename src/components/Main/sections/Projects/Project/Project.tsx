import type { projectDataType } from "../../../../../types/projectDataType";
import "../Project/Project.css";
import ProjectButton from "./ProjectButton/ProjectButton";

export default function Project(props: projectDataType) {
  return (
    <div className={`project ${props.inverted ? "inverted" : ""}`}>
      <div className="project-img-container">
        <img src={props.img} alt="" />
      </div>
      <div className="project-content">
        <div className="project-info-container">
          <h3>{props.name}</h3>
          <p>{props.simple_description}</p>
        </div>
        <div className="proyect-icons-container">
          <div className="project-techs">
            {props.techs.map((tech, index) => (
              <div key={index} className="project-tech">
                <img src={tech.icon} alt="" />
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
          <div className="project-buttons">
            <ProjectButton github href={props.github_href} />
            <ProjectButton href={props.href} descargable={props.descargable} />
          </div>
        </div>
      </div>
    </div>
  );
}
