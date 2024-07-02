import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import './header.css'; 

export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/"><img src="logo.png" alt="restaurant logo" /></Link>
            </div>
            <Navbar />
        </header>
    )
}