import React from "react";
import NavLogo from "../../assets/logo.png"
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    
        <div className="bg-gray-100">
            <div className="flex w-[90%] mx-auto items-center justify-between px-6 py-3 bg-gray-100">
      {/* Left Logo */}
      <div>
        <img src={NavLogo} alt="logo" className="h-10" />
      </div>

      {/* Center Links */}
      <div className="">
        <ul className="flex gap-6">

           <li><NavLink className={ ({isActive}) => isActive ? "text-purple-500 border-b-2 border-purple-500 pb-1" : "text-black"} to={'/'}>Home one</NavLink></li>
           <li><NavLink className={ ({isActive}) => isActive ? "text-purple-500 border-b-2 border-purple-500 pb-1" : "text-black"} to={'/apps'}>Apps</NavLink></li>
           <li><NavLink className={ ({isActive}) => isActive ? "text-purple-500 border-b-2 border-purple-500 pb-1" : "text-black"} to={'/installed'}>Install</NavLink></li>
        </ul>
      </div>

      {/* Right Button */}
      <div>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-md">
          Contribute
        </button>
      </div>
    </div>
        </div>

    
  );
};

export default Navbar;
