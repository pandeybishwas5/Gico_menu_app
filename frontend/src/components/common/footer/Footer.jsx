import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h2>GICO EATERY</h2>
                        <p>
                            GICO is the place to enjoy the finest dishes with family and friends. 
                            Our chefs use the freshest ingredients to create a memorable dining experience.
                        </p>
                    </div>
                    <div className="footer-section hours">
                        <h2>Trading Hours</h2>
                        <p>7 Days: 8am - Till late</p>
                    </div>
                    <div className="footer-section links">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/menuitems">Menu</Link></li>
                            <li><Link to="/reservations">Reservations</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section contact">
                        <h2>Contact Us</h2>
                        <p>SHOP 7, 143 GLYNBURN RD, FIRLE SA 5070</p>
                        <p>Email: gicoeatery@gmail.com</p>
                        <p>Phone: 08 7112 5509</p>
                    </div>
                </div>
            </footer>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} GICO Restaurant. All Rights Reserved.</p>
            </div>
        </>
    )
}
