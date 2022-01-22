import React from 'react';

import Footer from '../../components/Dashboard/Footer';
import Navbar from '../../components/Dashboard/Navbar';
import Sidebar from '../../components/Dashboard/Sidebar';

import './Dashboard.css';
import Accordion from '../../components/UI/Accordion/Accordion';
import { Outlet, Route, Routes } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className='dashboard'>
      <Navbar className='dashboard__navbar' />
      <main className='dashboard__body'>
        <div className='dashboard__container'>
          <Outlet />
        </div>
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
}
