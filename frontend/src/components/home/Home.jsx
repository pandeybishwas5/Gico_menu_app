import React from 'react';
import './home.css';

export default function Home() {
    return (
        <div className="home">
            <section className="welcome">
                <h1>Welcome to GICO Eatery</h1>
                <p>Experience the best dining in town with our exquisite dishes and exceptional service.</p>
            </section>

            <section className="featured-dishes">
                <h2>Featured Dishes</h2>
                <div className="dishes">
                    <div className="dish">
                        <img src="dish1.jpg" alt="Dish 1" />
                        <h3>Dish 1</h3>
                        <p>Delicious and savory, a true delight.</p>
                    </div>
                    <div className="dish">
                        <img src="dish2.jpg" alt="Dish 2" />
                        <h3>Dish 2</h3>
                        <p>A perfect blend of flavors.</p>
                    </div>
                    <div className="dish">
                        <img src="dish3.jpg" alt="Dish 3" />
                        <h3>Dish 3</h3>
                        <p>Our chef's special.</p>
                    </div>
                </div>
            </section>

            <section className="special-offers">
                <h2>Special Offers</h2>
                <p>Join us for Happy Hour every Friday from 5pm to 7pm! Enjoy 20% off on all drinks and appetizers.</p>
            </section>
        </div>
    )
}
