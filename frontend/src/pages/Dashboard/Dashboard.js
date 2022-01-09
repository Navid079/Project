import React, { useState } from 'react';
import { Icon } from '@iconify/react';

import Footer from '../../components/Dashboard/Footer';
import Navbar from '../../components/Dashboard/Navbar';
import Sidebar from '../../components/Dashboard/Sidebar';

import './Dashboard.css';

export default function Dashboard() {
  return (
    <>
      <div className='dashboard'>
        <Navbar className='dashboard__navbar' />
        <main className='dashboard__body'>
          <div className='dashboard__container'></div>
          <Sidebar />
        </main>
        <Footer />
      </div>
    </>
  );
}
