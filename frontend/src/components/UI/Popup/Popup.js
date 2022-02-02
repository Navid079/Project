import React from 'react';
import './Popup.css';

export default function Popup({ className, children }) {
  return <div dir="rtl" className={`popup ${className}`}>{children}</div>;
}
