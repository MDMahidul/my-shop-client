import React from 'react';
import DashboardNav from '../pages/Shared/Navbar/DashboardNav'    
import DashNav from "../pages/Shared/Navbar/DashNav";    
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