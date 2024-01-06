import './Navbar.css'
import React, { useState } from 'react';
import { Link } from 'react-scroll';

import logo from '../../../Assets/logo.png'
import LoginButton from './LoginButton';

function Navbar(props) {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo"><img src={logo}  alt="" /></div>
                <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="home" smooth={true} duration={50} onClick={toggleMenu}>
                        Home
                    </Link>
                    <Link to="about" smooth={true} duration={50} onClick={toggleMenu}>
                        About
                    </Link>
                    <Link to="services" smooth={true} duration={50} onClick={toggleMenu}>
                        Services
                    </Link>
                    <Link to="contact" smooth={true} duration={50} onClick={toggleMenu}>
                        Contact
                    </Link>
                    <LoginButton />
                </div>
                <div className="navbar-toggle" onClick={toggleMenu}>
                    <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;