import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/"><img src="logo.png" alt="restaurant logo" /></Link>
            </div>
            <div className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
                <Link to="/reservations">Reservartions</Link>
                <Link to="/login"><i className="fas fa-user"></i> Login</Link>
            </div>
            <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
            </button>
        </nav>
    );
}
