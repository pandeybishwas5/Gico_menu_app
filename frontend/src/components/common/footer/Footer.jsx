import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>About Us</h2>
                    <p>
                        GICO is the place to enjoy the finest dishes with family and friends. 
                        Our chefs use the freshest ingredients to create a memorable dining experience.
                    </p>
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/menu-items">Menu</Link></li>
                        <li><Link to="/reservations">Reservations</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h2>Contact Us</h2>
                    <p>1234 Delicious Street, Food City, FC 12345</p>
                    <p>Email: info@gicorestaurant.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} MyRestaurant. All Rights Reserved.</p>
            </div>
        </footer>
    ) 
}