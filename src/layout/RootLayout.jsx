import React from 'react';
import { CiLogin } from "react-icons/ci"
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        
        <>
            <div>Navbar</div>

            <Outlet></Outlet>

            <div>Footer</div>
        </>
    );
};

export default RootLayout;