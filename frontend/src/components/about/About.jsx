import React from 'react';
import './about.css'; // Make sure to create a CSS file for styling

function About() {
    return (
        <div className="aboutus-container">
            <h2>About Us</h2>
            <p>
                Welcome to our company! We are dedicated to providing the best services and products to our customers.
                Our team is passionate about innovation, quality, and customer satisfaction.
            </p>
            <div className="aboutus-details">
                <div className="team-member">
                    <h3>Our Mission</h3>
                    <p>
                        Our mission is to deliver exceptional value and to be a leader in our industry by embracing
                        innovation and nurturing a culture of excellence.
                    </p>
                </div>
                <div className="team-member">
                    <h3>Our Values</h3>
                    <p>
                        Integrity, excellence, and commitment to customer satisfaction are at the core of everything we
                        do. We believe in fostering a positive environment where our team members can thrive.
                    </p>
                </div>
                <div className="team-member">
                    <h3>Meet the Team</h3>
                    <p>
                        Our team is composed of talented and dedicated individuals who bring diverse skills and
                        experiences. Together, we work towards achieving our common goals and delivering outstanding
                        results.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
