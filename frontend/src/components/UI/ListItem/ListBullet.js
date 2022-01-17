import React from 'react';
import './ListBullet.css';

export default function ListBullet({ className, number }) {
  return <div className={`li-bullet ${className}`}>{number}</div>;
}
