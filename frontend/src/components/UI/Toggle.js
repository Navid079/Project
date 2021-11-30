import { useRef } from 'react';
import './Toggle.css';

const Toggle = ({ className, left, right, onToggle }) => {
  const toggler = useRef();

  const toggleHandler = event => {
    if (event.target.classList.contains('active')) return;

    toggler.current.classList.toggle('right');
    event.target.classList.add('active');
    const sibling =
      event.target.nextElementSibling || event.target.previousElementSibling;
    sibling.classList.remove('active');

    if (onToggle) onToggle(event);
  };

  return (
    <div className={`toggle ${className}`}>
      <div className="toggle__toggler" ref={toggler} />
      <button className="toggle__toggle-button active" onClick={toggleHandler}>
        {left}
      </button>
      <button className="toggle__toggle-button" onClick={toggleHandler}>
        {right}
      </button>
    </div>
  );
};

export default Toggle;
