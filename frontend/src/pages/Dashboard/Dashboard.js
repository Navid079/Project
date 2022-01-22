import React from 'react';

import Footer from '../../components/Dashboard/Footer';
import Navbar from '../../components/Dashboard/Navbar';
import Sidebar from '../../components/Dashboard/Sidebar';

import './Dashboard.css';
import Accordion from '../../components/UI/Accordion/Accordion';

export default function Dashboard() {
  return (
    <>
      <div className='dashboard'>
        <Navbar className='dashboard__navbar' />
        <main className='dashboard__body'>
          <div className='dashboard__container'>
            <Accordion title='موضوع'>
              این متن درون آکوردیون است
            </Accordion>
          </div>
          <Sidebar />
        </main>
        <Footer />
      </div>
    </>
  );
}
