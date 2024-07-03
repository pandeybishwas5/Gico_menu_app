import React from 'react';
import './cartbutton.css';

const CartButton = ({ onClick }) => {
    return (
        <button className="cart-button" onClick={onClick}>
            <img src="cartbutton.png" alt="Cart" />
        </button>
    );
};

export default CartButton;
