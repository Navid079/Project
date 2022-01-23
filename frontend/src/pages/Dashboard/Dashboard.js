import React, { useContext, useEffect } from 'react';
import FormContext from '../../ContextManager/FormContextManager/FormContext';

import Footer from '../../components/Dashboard/Footer';
import Navbar from '../../components/Dashboard/Navbar';
import Sidebar from '../../components/Dashboard/Sidebar';

import './Dashboard.css';
import Accordion from '../../components/UI/Accordion/Accordion';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import OrderedList from '../../components/UI/OrderedList/OrderedList';

export default function Dashboard() {
  const navigate = useNavigate();
  const { dispatch, isLoggedIn } = useContext(FormContext);

  const logoutHandler = event => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  };

  useEffect(() => {
    if (isLoggedIn) return;
    navigate('/');
  });

  const listChildren = [
    { progress: 30, item: <h1>Heading 1</h1> },
    { progress: 100, item: <h3>Heading 3</h3> },
    {
      progress: 65,
      item: <Accordion title='Accordion'>Accordion Body</Accordion>,
    },
    {
      progress: 49,
      item: (
        <div>
          Complex Child
          <div>
            <p>Lorem Ipsum</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className='dashboard'>
      <Navbar className='dashboard__navbar' onLogout={logoutHandler} />
      <main className='dashboard__body'>
        <div className='dashboard__container'>
          {/* <Outlet /> */}
          <OrderedList>{listChildren}</OrderedList>
        </div>
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
}
