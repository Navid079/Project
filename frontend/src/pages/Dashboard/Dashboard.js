import React from 'react';

import Footer from '../../components/Dashboard/Footer';
import Navbar from '../../components/Dashboard/Navbar';
import Sidebar from '../../components/Dashboard/Sidebar';

import './Dashboard.css';
import Accordion from '../../components/UI/Accordion/Accordion';
import ListBullet from '../../components/UI/ListItem/ListBullet';

export default function Dashboard() {
  return (
    <>
      <div className='dashboard'>
        <Navbar className='dashboard__navbar' />
        <main className='dashboard__body'>
          <div className='dashboard__container'>
            <Accordion title='موضوع'>
              <ListBullet number='1' progress={10} />
              <ListBullet number='2' progress={20} />
              <ListBullet number='3' progress={30} />
              <ListBullet number='4' progress={40} />
              <ListBullet number='5' progress={50} />
              <ListBullet number='6' progress={60} />
              <ListBullet number='7' progress={70} />
              <ListBullet number='8' progress={80} />
              <ListBullet number='9' progress={90} />
              <ListBullet number='10' progress={100} />
            </Accordion>
          </div>
          <Sidebar />
        </main>
        <Footer />
      </div>
    </>
  );
}
