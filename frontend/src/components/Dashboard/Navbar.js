import React from 'react';
import { Icon } from '@iconify/react';
import './Navbar.css';
import SearchInput from './SearchInput';
import Tooltip from './Tooltip';

export default function Navbar({ className }) {
  return (
    <div className={`navbar ${className}`}>
      {/* search component */}
      <SearchInput />

      {/* website logo */}
      <div className='dashboard__logo'></div>

      <div className='navbar__container'>
        {/* logout button */}
        <div className='navbar__logout'>
          <Icon icon='bx:bx-log-out' />
        </div>

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
        <div className='navbar__back'>
          <Icon icon='eva:arrow-ios-back-outline' />
        </div>
      </div>
    </div>
  );
}
