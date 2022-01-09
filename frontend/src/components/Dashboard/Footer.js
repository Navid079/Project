import React from 'react';
import { Icon } from '@iconify/react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className='dashboard__footer'>
      <div className='dashboard__footer__plus'>
        <Icon icon='bytesize:plus' />
      </div>
      <div className='dashboard__contact'>
        <Icon icon='bx:bx-support' />
      </div>
    </footer>
  );
}
