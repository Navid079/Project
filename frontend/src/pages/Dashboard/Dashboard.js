import React, { useContext, useEffect } from 'react';
import FormContext from '../../ContextManager/FormContextManager/FormContext';

import Footer from '../../components/Dashboard/Footer';
import Navbar from '../../components/Dashboard/Navbar';
import Sidebar from '../../components/Dashboard/Sidebar';

import './Dashboard.css';
import { Outlet, useNavigate } from 'react-router-dom';

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

  return (
    <div className='dashboard'>
      <Navbar className='dashboard__navbar' onLogout={logoutHandler} />
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
