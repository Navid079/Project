import { Icon } from '@iconify/react';
import React from 'react';

import './IconButton.css';

const IconButton = ({ className, icon, onClick }) => {
  return (
    <button className={`icon-button ${className}`} onClick={onClick}>
      <Icon className='icon-button__icon' icon={icon} />
    </button>
  );
};

export default IconButton;
