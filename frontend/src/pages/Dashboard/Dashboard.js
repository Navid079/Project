import React, { useState } from 'react';

import Navbar from '../../components/Dashboard/Navbar';
import Sidebar from '../../components/Dashboard/Sidebar';

import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className='dashboard'>
      <Navbar />
      <main className='dashboard__body'>
        <div className='dashboard__container'></div>
        <Sidebar />
      </main>
    </div>
  );
}
