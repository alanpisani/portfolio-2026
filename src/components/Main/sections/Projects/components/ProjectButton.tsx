import "./ProjectButton.css";
import { SiGithub } from "react-icons/si";

interface ProjectButtonProps {
  href: string;
  descargable?: boolean;
  github?: boolean;
}

export default function ProjectButton(props: ProjectButtonProps) {
  const classname = `project__button ${props.github ? "github" : props.descargable ? "download" : "common"}`;

  return (
    <a
      className={classname}
      href={props.href}
      target= "_blank"
      rel="noopener noreferrer"
    >
      {props.descargable ? (
        "Descargar"
      ) : props.github ? (
        <>
          <SiGithub style={{ marginRight: "8px" }} />
          Ir a GitHub
        </>
      ) : (
        "Ver proyecto"
      )}
    </a>
  );
}
