import React, { useEffect, useState, useRef } from 'react';
import './menuitems.css';
import { getMenuItems } from '../api/api';

function MenuItems({ handleAddtoCart }) {
    const [menuItems, setMenuItems] = useState([]);
    const [activeCategory, setActiveCategory] = useState('');
    const menuRef = useRef(null);

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

    // Function to handle scrolling and activate category
    const handleScroll = () => {
        const scrollPosition = menuRef.current.scrollTop;
        const menuItemElements = document.querySelectorAll('.menu-item');

        menuItemElements.forEach((menuItem) => {
            const menuItemTop = menuItem.offsetTop - menuRef.current.offsetTop;
            const menuItemBottom = menuItemTop + menuItem.clientHeight;

            if (scrollPosition >= menuItemTop && scrollPosition < menuItemBottom) {
                const category = menuItem.getAttribute('data-category');
                setActiveCategory(category);
            }
        });
    };

    // Function to add item to cart
    const addToCart = (item) => {
        handleAddtoCart(item);
    };

    // Function to render menu items grouped by category
    const renderMenuItems = () => {
        const categories = [...new Set(menuItems.map((item) => item.category))];
        return categories.map((category) => (
            <div key={category} className="category-section">
                <h2 className="category-header">{category}</h2>
                {menuItems
                    .filter((item) => item.category === category)
                    .map((item) => (
                        <div
                            key={item.id}
                            className="menu-item"
                            data-category={item.category}
                            onClick={() => addToCart(item)}
                        >
                            <h3>{item.name}</h3>
                            <p>{item.description || 'No description available'}</p>
                            <div className="price">${Number(item.price).toFixed(2)}</div>
                            <button>Add to Cart</button>
                        </div>
                    ))}
            </div>
        ));
    };

    // Function to generate unique categories
    const generateCategories = () => {
        const categories = [...new Set(menuItems.map((item) => item.category))];
        return categories.map((category) => (
            <div
                key={category}
                className={`category-item ${activeCategory === category ? 'active' : ''}`}
                onClick={() => scrollToCategory(category)}
            >
                {category}
            </div>
        ));
    };

    // Function to scroll to specific category
    const scrollToCategory = (category) => {
        const menuItem = document.querySelector(`.menu-item[data-category="${category}"]`);
        if (menuItem) {
            menuItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="menu-container">
            <div className="menu-categories" ref={menuRef} onScroll={handleScroll}>
                {generateCategories()}
            </div>
            <div className="menu-items">
                {renderMenuItems()}
            </div>
        </div>
    );
}

export default MenuItems;
