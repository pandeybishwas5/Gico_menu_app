import React from 'react';
import './homecontent.css';

export default function HomeContents() {
    return (
        <div className="home-contents">
            <div className="home-contents__container">
                <img src='people.jpg' alt='people' /> 
                <p>Enjoy Great Food With Excellent Customer Service.</p>
            </div>
            <div className="content-row">
                <div className="content-text">
                    <p>View Drinks Menu</p>
                </div>
                <div className="content-image">
                    <img src='drinks.jpg' alt='drinks' />
                </div>
            </div>
            <div className="content-row">
                <div className="content-image">
                    <img src='table.jpg' alt='table' />
                </div>
                <div className="content-text">
                    <p>View Food Menu</p>
                </div>
            </div>
            <div className="bottom-map">
            <div className="find-us">
                <img src="bottompic.png" alt="Opening Hours" />
            </div>
            <div className="map-container">
                <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=138.65496307611465%2C-34.902696919933796%2C138.6585035920143%2C-34.900796316949766&amp;layer=mapnik&amp;marker=-34.90174662393986%2C138.65673333406448"
                ></iframe>
                <br />
                <small>
                    <a href="https://www.openstreetmap.org/?mlat=-34.90175&amp;mlon=138.65673#map=19/-34.90175/138.65673">
                        View Larger Map
                    </a>
                </small>
            </div>
        </div>
        </div>
    );
}
