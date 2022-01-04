import React from "react";

import DashboardTab from './../../components/Dashboard/DashboardTab';

import "./Dashboard.css";

export default function Dashboard() {

  const hoverHandler = (event) => {
    
  }

  return (
    <div className="dashboard">
    {/* on hover, showText changes to true */}
      <DashboardTab showText={true} icon="tabler:report-analytics" className="test">داشبورد</DashboardTab>
      <DashboardTab icon="tabler:report-analytics" className="test">گزارشات</DashboardTab>
      <DashboardTab icon="ion:newspaper" className="test">خبرنامه</DashboardTab>
      <DashboardTab icon="gridicons:product" className="test">محصولات</DashboardTab>
    </div>
  );
}
