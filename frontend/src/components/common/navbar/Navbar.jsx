import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(false);

    return (
        <>
            <nav className={isMobile ? "nav-links-mobile" : "nav-links"} 
                onClick={() => setIsMobile(false)}>
                <Link to="/">Home</Link>
                <Link to="/menuitems">Menu</Link>
                <Link to="/reservations">Reservations</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
                <Link to="/login"><i className="fas fa-user"></i> Login</Link>
            </nav>
            <button className="mobile-menu-icon"
                    onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
            </button>
        </>
    )
}
