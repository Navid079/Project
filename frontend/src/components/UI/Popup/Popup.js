import { Icon } from '@iconify/react';
import React from 'react';
import './Popup.css';

export default function Popup({ className, icon, children }) {
  return (
    <div className={`popup ${className}`}>
      <Icon className='popup__icon' icon={icon}></Icon>
      {children}
    </div>
  );
}
