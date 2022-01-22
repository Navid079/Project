import React from 'react';
import { Icon } from '@iconify/react';
import './DashboardTab.css';
import { Link } from 'react-router-dom';

export default function DashboardTab({ className, icon, showText, children, link }) {
  return (
    <Link to={link} style={{textDecoration: 'none'}}>
      <div
        className={`dashboard-tab ${showText ? 'dashboard-tab--stretch' : ''} ${
          className || ''
        }`}
      >
        <div className='dashboard-tab__icon-container'>
          <Icon className='dashboard-tab__icon' icon={icon} />
        </div>
        <h3
          className={`dashboard-tab__text ${
            showText ? 'dashboard-tab__text--show' : ''
          }`}
        >
          {children}
        </h3>
      </div>
    </Link>
  );
}
