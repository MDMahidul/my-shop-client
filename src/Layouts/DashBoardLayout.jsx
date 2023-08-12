import React from 'react';
import DashboardNav from '../pages/Shared/Navbar/DashboardNav'    
import { Outlet } from 'react-router-dom';

const DashBoardLayout = () => {
    return (
        <div>
            <DashboardNav></DashboardNav>
            <Outlet></Outlet>
        </div>
    );
};

export default DashBoardLayout;