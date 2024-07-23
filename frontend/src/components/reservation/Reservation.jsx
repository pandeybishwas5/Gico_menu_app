import React, { useState } from 'react';
import './reservation.css';

function Reservation() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        guests: '',
        date: '',
        time: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to server)
        console.log('Reservation submitted:', formData);
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            phone: '',
            guests: '',
            date: '',
            time: '',
        });
    };

    return (
        <div className="reservation-container">
            <h2>Make a Reservation</h2>
            <form className="reservation-form" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Phone:
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Number of Guests:
                    <input
                        type="number"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Date:
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Time:
                    <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Reservation;
