import React, { useState } from 'react';

import DashboardTab from './DashboardTab';

import './Sidebar.css';

export default function Sidebar() {
  const [appendTab, setAppendTab] = useState(false);

  const hoverHandler = (event) => {
    setAppendTab(true);
  };

  const exitHandler = (event) => {
    setAppendTab(false);
  };

  return (
    <div>
      <div
        className='dashboard__sidebar'
        onMouseEnter={hoverHandler}
        onMouseLeave={exitHandler}
      >
        <DashboardTab
          className='dashboard__sidebar__item'
          showText={appendTab}
          icon='tabler:report-analytics'
        >
          داشبورد
        </DashboardTab>
        <DashboardTab
          className='dashboard__sidebar__item'
          showText={appendTab}
          icon='tabler:report-analytics'
        >
          گزارشات
        </DashboardTab>
        <DashboardTab
          className='dashboard__sidebar__item'
          showText={appendTab}
          icon='ion:newspaper'
        >
          خبرنامه
        </DashboardTab>
        <DashboardTab
          className='dashboard__sidebar__item'
          showText={appendTab}
          icon='gridicons:product'
        >
          محصولات
        </DashboardTab>
      </div>
    </div>
  );
}
