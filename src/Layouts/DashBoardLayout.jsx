import React from 'react';
import DashboardNav from '../pages/Shared/Navbar/DashboardNav'    
import { Outlet } from 'react-router-dom';

const DashBoardLayout = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <DashboardNav></DashboardNav>
            <Outlet></Outlet>
        </div>
    );
};

export default DashBoardLayout;