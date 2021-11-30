import { useRef } from 'react';
import './Toggle.css';

const Toggle = props => {
  const toggler = useRef();

  const toggleHandler = event => {
    if (event.target.classList.contains('active')) return;

    toggler.current.classList.toggle('right');
    event.target.classList.add('active');
    const sibling =
      event.target.nextElementSibling || event.target.previousElementSibling;
    sibling.classList.remove('active');
  };

  return (
    <div className="toggle">
      <div className="toggle__toggler" ref={toggler} />
      <button className="toggle__toggle-button active" onClick={toggleHandler}>
        {props.left}
      </button>
      <button className="toggle__toggle-button" onClick={toggleHandler}>
        {props.right}
      </button>
    </div>
  );
};

export default Toggle;
