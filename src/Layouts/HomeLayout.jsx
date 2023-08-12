import React from 'react';
import HomeNav from '../pages/Shared/Navbar/HomeNav';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div>
            <HomeNav></HomeNav>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayout;