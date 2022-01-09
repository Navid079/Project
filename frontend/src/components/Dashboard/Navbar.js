import React from 'react';
import { Icon } from '@iconify/react';
import './Navbar.css';
import TextInput from '../UI/TextInput/TextInput';
import SearchInput from './SearchInput';

export default function Navbar({className}) {
  return (
    <div className={`navbar ${className}`}>
      {/* search component */}
      <SearchInput />

      {/* website logo */}
      <div className='dashboard__logo'></div>

      {/* logout button */}
      <div className='navbar__logout'>
        <Icon icon='bx:bx-log-out' />
      </div>

      {/* profile photo */}
      <div className='navbar__profile'></div>

      {/* back button */}
      <div className='navbar__back'>
        <Icon icon='eva:arrow-ios-back-outline' />
      </div>
    </div>
  );
}
