import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/services'>Services</NavLink>
        <NavLink to='/profile'>My Profile</NavLink>
    </>


    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-4 font-semibold text-lg">

                        {links}
                    </ul>
                </div>
                <Link to='/' className=" btn bg-white shadow-none border-0 text-xl  logo">WarmPaws</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4 font-semibold text-lg">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">


                <p className='flex items-center gap-2 mr-2 font-bold text-xl logo'> {hover && 'Salikur Islam'}</p>

                <div className="avatar avatar-online logo" onMouseEnter={(onHover)} onMouseLeave={onHover}>
                    <div className="w-13 rounded-full cursor-pointer">
                        <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Navbar;