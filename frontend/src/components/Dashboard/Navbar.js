import React from 'react';
import { Icon } from '@iconify/react';
import './Navbar.css';
import TextInput from '../UI/TextInput/TextInput';

export default function Navbar(props) {
  return (
    <div className='navbar'>
      {/* search component */}
      <Icon icon='fluent:search-24-regular' />
      <TextInput
        className='navbar__search-bar'
        type='search'
        placeholder='جستجو'
      ></TextInput>

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
