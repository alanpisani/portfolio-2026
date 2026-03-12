import "../Logo/Logo.css"

export default function Logo() {
  return (
    <button className="logo" onClick={() => window.location.reload()}>
      <span>A</span>
      <span>P</span>
    </button>
  );
}
