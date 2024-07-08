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
                    <p>View our Menu</p>
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
                    <p>View our Menu</p>
                </div>
            </div>
        </div>
    );
}
