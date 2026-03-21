import "./Burger.css";

interface Props {
  isClicked: boolean;
  toggle: (atr: boolean) => void;
}

export default function Burger({ isClicked, toggle }: Props) {
  return (
    <button
      className={`burger ${isClicked ? "clicked" : ""}`}
      onClick={() => toggle(!isClicked)}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
