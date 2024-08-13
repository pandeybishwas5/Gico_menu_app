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
                setMenuItems(data || []);
            } catch (error) {
                console.error('Error fetching menu items:', error);
            }
        };

        fetchMenuItems();
    }, []);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const categorySections = document.querySelectorAll('.category-section');

        categorySections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const category = section.querySelector('.category-header').innerText;
                setActiveCategory(category);
            }
        });
    };

    const addToCart = (item) => {
        handleAddtoCart(item);
    };

    const renderMenuItems = () => {
        if (menuItems.length === 0) {
            return <p>No menu items available.</p>;
        }

        const categories = [...new Set(menuItems.map((item) => item.category.name))];
        return categories.map((category) => (
            <div key={category} className="category-section">
                <h2 className="category-header">{category}</h2>
                <div className="menu-items-grid">
                    {menuItems
                        .filter((item) => item.category.name === category)
                        .map((item) => (
                            <div
                                key={item.id}
                                className="menu-item"
                                onClick={() => addToCart(item)}
                            >
                                <h3>{item.name}</h3>
                                <p>{item.description || 'No description available'}</p>
                                <div className="price">${Number(item.price).toFixed(2)}</div>
                                <button>Add to Cart</button>
                            </div>
                        ))}
                </div>
            </div>
        ));
    };

    const generateCategories = () => {
        const categories = [...new Set(menuItems.map((item) => item.category.name))];
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

    const scrollToCategory = (category) => {
        const categorySection = Array.from(document.querySelectorAll('.category-section'))
            .find(section => section.querySelector('.category-header').innerText === category);

        if (categorySection) {
            window.scrollTo({ top: categorySection.offsetTop - 20, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="menu-container">
            <div className="menu-categories">
                {generateCategories()}
            </div>
            <div className="menu-items">
                {renderMenuItems()}
            </div>
        </div>
    );
}

export default MenuItems;
