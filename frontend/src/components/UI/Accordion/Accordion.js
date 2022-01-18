import React, { useRef } from 'react';

import './Accordion.css';

const Accordion = ({ className, title, children }) => {

  const body = useRef();

  const toggleHandler = (event) => {
    body.current.classList.toggle('accordion__body--show');
  }

  return (
    <div className={`accordion ${className}`}>
      <div className='accordion__title' onClick={toggleHandler}>
        {title}
      </div>
      <div className='accordion__body' ref={body}>{children}</div>
    </div>
  );
};

export default Accordion;
