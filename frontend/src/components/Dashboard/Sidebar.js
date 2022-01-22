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
    <aside>
      <div
        className='dashboard__sidebar'
        onMouseEnter={hoverHandler}
        onMouseLeave={exitHandler}
      >
        <DashboardTab
          className='dashboard__sidebar__item'
          showText={appendTab}
          icon='tabler:report-analytics'
          link='/dashboard'
          >
          داشبورد
        </DashboardTab>
        <DashboardTab
          className='dashboard__sidebar__item'
          showText={appendTab}
          icon='tabler:report-analytics'
          link='/dashboard/report'
          >
          گزارشات
        </DashboardTab>
        <DashboardTab
          className='dashboard__sidebar__item'
          showText={appendTab}
          icon='ion:newspaper'
          link='/dashboard/newsletter'
          >
          خبرنامه
        </DashboardTab>
        <DashboardTab
          className='dashboard__sidebar__item'
          showText={appendTab}
          icon='gridicons:product'
          link='/dashboard/items'
          >
          محصولات
        </DashboardTab>
      </div>
    </aside>
  );
}
