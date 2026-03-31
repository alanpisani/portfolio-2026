import type { techCardType } from "../../../../../../types/TechCardType";
import "./TechCodeBlock.css";

export default function TechCodeBlock(props: techCardType) {
  return (
    <div className="branch">

      <span className="bracket">{"  {"}</span>
      <br />
      <span className="key">rama</span>
      <span>: </span>
      <span className="string">"{props.branch}",</span>
      <br />
      <span className="key">tecnologias</span>
      <span>: </span>
      <span className="bracket">  [</span>
      {props.techs.map((tech, index) => (
        <span className="string">
          "{tech}"
          <span className="bracket">
            {index != props.techs.length - 1 && ", "}
          </span>
        </span>
      ))}
      <span className="bracket">
        ]<br />
        {"  },"}
      </span>

    </div>
  );
}
