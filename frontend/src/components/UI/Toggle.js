import { useRef } from "react";
import "./Toggle.css";

const Toggle = ({ className, leftLabel, rightLabel, reference, onToggle }) => {
  const toggler = useRef();

  const toggleHandler = (event) => {
    if (event.target.classList.contains("active")) return;

    toggler.current.classList.toggle("right");
    event.target.classList.add("active");
    const sibling =
      event.target.nextElementSibling || event.target.previousElementSibling;
    sibling.classList.remove("active");

    const position = toggler.current.classList.contains("right")
      ? "right"
      : "left";
    if (onToggle) onToggle(position);
  };

  return (
    <div className={`toggle ${className}`} ref={reference}>
      <div className="toggle__toggler" ref={toggler} />
      <button className="toggle__toggle-button active" onClick={toggleHandler}>
        {leftLabel}
      </button>
      <button className="toggle__toggle-button" onClick={toggleHandler}>
        {rightLabel}
      </button>
    </div>
  );
};

export default Toggle;
