import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MenuItems.css';

function MenuItems() {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/menu')
            .then(response => setMenuItems(response.data))
            .catch(error => console.error('Error fetching menu items:', error));
    }, []);

    return (
        <div>
            <h1>Menu</h1>
            <ul>
                {menuItems.map(item => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>${item.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MenuItems;
