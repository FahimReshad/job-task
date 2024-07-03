import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Layout = () => {
    return (
        <div className='px-2'>
            <div className='container mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
        <div>
            <Footer></Footer>
        </div>
        </div>
    );
};

export default Layout;