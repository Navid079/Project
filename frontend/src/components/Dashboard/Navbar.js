import React from 'react';
import { Icon } from '@iconify/react';
import './Navbar.css';
import SearchInput from './SearchInput';
import Tooltip from './Tooltip';
import IconButton from '../UI/Button/IconButton';

export default function Navbar({ className, onLogout, onBack }) {
  return (
    <div className={`navbar ${className}`}>
      {/* search component */}
      <SearchInput />

      {/* website logo */}
      <div className='dashboard__logo'></div>

      <div className='navbar__container'>
        {/* logout button */}
        <IconButton
          className='navbar__logout'
          icon='bx:bx-log-out'
          onClick={onLogout}
        />

        {/* profile photo */}
        <div className='navbar__profile'>
          <Tooltip
            name={'نام'}
            lastName={'نام خانوادگی'}
            shopName={'نام فروشگاه'}
            href={'#'}
            status={'وضعیت'}
          />
        </div>

        {/* back button */}
        <IconButton
          className='navbar__back'
          icon='eva:arrow-ios-back-outline'
          onClick={onBack}
        />
      </div>
    </div>
  );
}
