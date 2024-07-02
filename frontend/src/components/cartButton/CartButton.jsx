import React from 'react';
import { Link } from 'react-router-dom';
import './cartbutton.css';


export default function CartButton() {
    return (
        <Link to="/cart" className="cart-button">
            <img src="cartbutton.png" alt="Cart" />
        </Link>
    )
};
