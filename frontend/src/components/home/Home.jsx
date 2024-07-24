import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export default function Home() {
    return (
        <div className="home">
            <section className="welcome">
                <div className="welcome-content">
                    <h1>Welcome to GICO Eatery</h1>
                    <p>Experience the best dining in town with our exquisite dishes and exceptional service.</p>
                </div>
            </section>

            <div className="tabs-row">
                <Link to="/menu" className="tab" style={{ backgroundImage: "url('menu.jpg')" }}>
                    <div className="overlay">Menu</div>
                </Link>
                <Link to="/reservations" className="tab" style={{ backgroundImage: "url('reservations.jpg')" }}>
                    <div className="overlay">Reservations</div>
                </Link>
                <Link to="/contact" className="tab" style={{ backgroundImage: "url('contact1.jpg')" }}>
                    <div className="overlay">Contact</div>
                </Link>
                <Link to="/about" className="tab" style={{ backgroundImage: "url('about.jpg')" }}>
                    <div className="overlay">About</div>
                </Link>
            </div>
        </div>
    );
}
