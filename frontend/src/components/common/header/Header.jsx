import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import arrowLeftImage from '/arrowleft.png?url';
import arrowRightImage from '/arrowright.png?url';



const images = [
    '/dish5.jpg',
    '/dish4.jpg',
    '/dish1.jpg',
    '/dish2.jpg',
    '/dish3.jpg',
];

export default function Header() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const previousImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
    };

    const nextImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    };

    return (
        <header className="header" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
            <div className="overlay">
                <div className="container">
                    <p className="mb-3">Order Online - pickup</p>
                    <h1>Fresh, Gourmet Food</h1>
                    <div>
                        <p>Experience the best dining in town with our exquisite dishes and exceptional service.</p>
                    </div>
                    <div className="btn-group">
                        <Link to="/menu" className="order-button">Order Online</Link>
                    </div>
                </div>
            </div>
            <img src={arrowLeftImage} className="arrow arrow-left" onClick={previousImage} alt="Previous" />
            <img src={arrowRightImage} className="arrow arrow-right" onClick={nextImage} alt="Next" />
        </header>
    );
}
