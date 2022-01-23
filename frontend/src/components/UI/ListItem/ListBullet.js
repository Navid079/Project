import React from 'react';
import './ListBullet.css';

export default function ListBullet({ className, number, progress }) {
  const lines = 8 - Math.floor(progress / 14.28);
  const dashArraySum = Math.round((Math.PI / lines) * 100);
  const linePercentage =
    Math.round((0.5 + Math.ceil(progress / 2) / 100) * dashArraySum * 100) /
    100;
  const spacePercentage = dashArraySum - linePercentage;

  const bg = `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%236AD727FF' stroke-width='5' stroke-dasharray='${Math.floor(
    linePercentage
  )}%25${Math.floor(
    spacePercentage
  )}%25' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e")`;

  console.log(bg);

  return (
    <div className={`progress-bullet ${className}`}>
      <div
        className='progress-bullet__bg'
        style={{ backgroundImage: bg }}
      ></div>
      <div className='progress-bullet__content'>{number}</div>
    </div>
  );
}
