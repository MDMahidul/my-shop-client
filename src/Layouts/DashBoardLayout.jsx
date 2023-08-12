import React from 'react';
import DashboardNav from '../pages/Shared/Navbar/DashboardNav'    
import { Outlet } from 'react-router-dom';

const DashBoardLayout = () => {
    return (
      <div>
        <DashboardNav></DashboardNav>
        <div className="md:ms-72 pr-8">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default DashBoardLayout;