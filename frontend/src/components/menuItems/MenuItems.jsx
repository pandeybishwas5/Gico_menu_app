import React, { useEffect, useState } from 'react';
import './menuitems.css';
import { getMenuItems } from '../api/api';

function MenuItems() {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const data = await getMenuItems();
                setMenuItems(data);
            } catch (error) {
                console.error('Error fetching menu items:', error);
            }
        };

        fetchMenuItems();
    }, []);

    return (
        <div className="menu-container">
            <h1>Menu</h1>
            <ul>
                {menuItems.map(item => (
                    <li key={item.id} className="menu-item">
                        <div className="text-container">
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                        </div>
                        <img src={item.image} alt={item.name} />
                        <div className="price">${item.price}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MenuItems;
