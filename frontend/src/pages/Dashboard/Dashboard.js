import React, { useContext, useEffect } from 'react';
import FormContext from '../../ContextManager/FormContextManager/FormContext';

import Footer from '../../components/Dashboard/Footer';
import Navbar from '../../components/Dashboard/Navbar';
import Sidebar from '../../components/Dashboard/Sidebar';

import './Dashboard.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { avatarGetApiCall } from '../../API_Calls/AvatarApiCall';
import { profileGetApiCall } from '../../API_Calls/ProfileApiCall';

import profileIsCompleted from '../../utils/profileIsCompleted'

export default function Dashboard() {
  const navigate = useNavigate();

  const context = useContext(FormContext);
  const { dispatch, isLoggedIn, validated, auth, avatar } = context;

  const logoutHandler = event => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  };
  
  useEffect(() => {
    profileGetApiCall(auth, dispatch);
    avatarGetApiCall(auth, dispatch);
    if (!profileIsCompleted(context)) {
      navigate('/dashboard/not-completed')
      dispatch({ type: 'NOT_COMPLETED' })
    }
  }, [auth, dispatch]);

  useEffect(() => {
    const currentLocation = window.location.pathname;
    if (isLoggedIn && validated) return;
    if (!isLoggedIn) return navigate('/');
    if (!validated && currentLocation !== '/dashboard/not-completed' && currentLocation !== '/dashboard/not-validated')
      return navigate('/dashboard/not-validated');
  });

  const avatarUrl = `url('data:image/png;base64,${avatar}')`;

  return (
    <div className='dashboard'>
      <Navbar
        className='dashboard__navbar'
        onLogout={logoutHandler}
        avatar={avatarUrl}
      />
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
