import React from 'react';
import './ListBullet.css';

export default function ListBullet({ className, number }) {
  return (
    <div
      className={`progress-bullet ${className}`}
    >
      {number}
    </div>
  );
}
