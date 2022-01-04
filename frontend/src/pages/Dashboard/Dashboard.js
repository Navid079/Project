import React, { useState } from "react";

import DashboardTab from './../../components/Dashboard/DashboardTab';

import "./Dashboard.css";

export default function Dashboard() {

  const [appendTab, setAppendTab] = useState(false); 

  const hoverHandler = (event) => {
    setAppendTab(true)
  }

  const exitHandler = (event) => {
    setAppendTab(false)
  }

  return (
    <div className="dashboard" onMouseEnter={hoverHandler} onMouseLeave={exitHandler}>
    {/* on hover, showText changes to true */}
      <DashboardTab showText={appendTab} icon="tabler:report-analytics" className="test">داشبورد</DashboardTab>
      <DashboardTab showText={appendTab} icon="tabler:report-analytics" className="test">گزارشات</DashboardTab>
      <DashboardTab showText={appendTab} icon="ion:newspaper" className="test">خبرنامه</DashboardTab>
      <DashboardTab showText={appendTab} icon="gridicons:product" className="test">محصولات</DashboardTab>
    </div>
  );
}
