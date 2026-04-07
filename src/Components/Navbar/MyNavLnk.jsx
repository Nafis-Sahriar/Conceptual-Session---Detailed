import React from 'react';
import { NavLink } from 'react-router';

const MyNavLnk = ({to, children}) => {
    return (
       <NavLink className={ ({isActive}) => isActive ? "text-purple-500 border-b-2 border-purple-500 pb-1" : "text-black"} to={to}>{children}</NavLink>
    );
};

export default MyNavLnk;