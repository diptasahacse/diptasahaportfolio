import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li> <a href='#about-me'>About</a> </li>
                            <li> <a href='#all-projects'>Projects</a> </li>
                            <li> <a href='#all-services'>Services</a> </li>
                            <li> <a href='#contact'>Contact</a> </li>
                            <li><Link to='/blog'>Blog</Link></li>
                            
                            <a className="btn btn-primary btn-sm" href='https://drive.google.com/uc?export=download&id=1ueI1bIIvVsf8-6M72b-TIUwFuS52AL6i' target='_blank'>Download Resume</a>
                        </ul>

                    </div>
                    <Link className='btn btn-ghost normal-case text-xl text-primary' to='/'>Dipta</Link>

                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li> <a href='#about-me'>About</a> </li>
                        <li> <a href='#all-projects'>Projects</a> </li>
                        <li> <a href='#all-services'>Services</a> </li>
                        <li> <a href='#contact'>Contact</a> </li>
                        <li><Link to='/blog'>Blog</Link></li>

                    </ul>
                    <a className="btn btn-primary btn-sm" href='https://drive.google.com/uc?export=download&id=1ueI1bIIvVsf8-6M72b-TIUwFuS52AL6i' target='_blank'>Download Resume</a>
                </div>

            </div>

        </div>

    );
};

export default Navbar;