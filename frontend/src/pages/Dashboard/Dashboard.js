import React from 'react';

import Footer from '../../components/Dashboard/Footer';
import Navbar from '../../components/Dashboard/Navbar';
import Sidebar from '../../components/Dashboard/Sidebar';

import './Dashboard.css';
import ListItem from '../../components/UI/ListItem/ListBullet';

export default function Dashboard() {
  let visible = 20;
  let invisible = 20;
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
