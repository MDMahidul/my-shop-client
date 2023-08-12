import React from 'react';
import DashboardNav from '../pages/Shared/Navbar/DashboardNav'    
import { Outlet } from 'react-router-dom';

const DashBoardLayout = () => {
    return (
      <div>
        <DashboardNav></DashboardNav>
        <div className="md:ms-72 px-4">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default DashBoardLayout;