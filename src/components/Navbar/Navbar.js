import React from 'react';
import './Navbar.scss';
import logo from '../../logo.svg';
export default function() {
    return (
        <nav className='navbar'>
            <img src={logo}  alt="Logo" />
        
            <ul className='nav-links'>
                <li className='nav-link'>
                    <a href='/' >Home</a>
                </li>
                <li className='nav-link'>
                    <a href='' >About</a>
                </li>
                <li className='nav-link '>
                    <a href='' className='active'>Tour</a>
                </li>
            </ul>
        </nav>
    )
}