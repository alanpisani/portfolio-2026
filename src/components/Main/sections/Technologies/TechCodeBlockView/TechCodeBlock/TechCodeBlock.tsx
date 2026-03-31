import type { techCardType } from "../../../../../../types/TechCardType";
import "./TechCodeBlock.css";

export default function TechCodeBlock(props: techCardType) {
  return (
    <div className="branch">
      <span className="export-color">{"  {"}</span>
      <br />
      <span className="key">rama: </span>
      <span className="string">"{props.branch}",</span>
      <br />
      <span className="key">tecnologias: </span>
      <span className="blue-bracket">[</span>
      {props.techs.map((tech, index) => (
        <span className="string" key={`${tech}-${index}`}>
          "{tech}"
          <span className="bracket">
            {index != props.techs.length - 1 && ", "}
          </span>
        </span>
      ))}
      <span className="blue-bracket">]</span>
      <br />
      <span className="export-color">{"  }"}</span>
      <span className="bracket">,</span>
    </div>
  );
}
