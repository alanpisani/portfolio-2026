import "./Button.css";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  isPrimary?: boolean;
  download?: boolean;
}

export default function Button(props: ButtonProps) {
  return (
    <a
      className={`button ${props.isPrimary ? "primary" : ""}`}
      href={props.href}
      download={props.download}
      target={props.download ? "undefined" : "_blank"}
      rel={props.download ? "undefined" : "noopener noreferrer"}
      onClick={props.onClick}
    >
      {props.text}
    </a>
  );
}
