import React from 'react';
import { Link } from 'react-router-dom';
import kayumImage from '../../../Assets/kayum.jpeg'

const Navbar = () => {

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/resume'>Resume</Link></li>
        <li><Link to='/contactme'>Contact Me</Link></li>

    </>

    return (
        <div className="navbar bg-base-100 md:px-10 px-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>

                <Link to='/' className="avatar flex items-center">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={kayumImage} alt='kayumImage' />
                    </div>
                    <a className="btn btn-ghost normal-case text-xl md:flex hidden">Md. Abdul Kayum</a>
                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a href="https://drive.google.com/file/d/1TnLbFJYiAhffD1nvuEGx_MEoKrJUrEij/view?usp=sharing" className="btn" target='_blank' >Download Résumé</a>
            </div>
        </div>
    );
};

export default Navbar;