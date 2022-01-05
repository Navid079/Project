import React, { useState } from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className='dashboard'>
      <Navbar />
      <div>
        <Sidebar />
        <div className='dashboard__container'></div>
      </div>
    </div>
  );
}
