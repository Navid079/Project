import React, { useState } from 'react';

import './Dashboard.css';
import Sidebar from './Sidebar';

export default function Dashboard() {
  return (
    <div className='dashboard'>
      <Sidebar />
    </div>
  );
}
