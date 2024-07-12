import React from 'react';
import './cartbutton.css';

const CartButton = ({ onClick, cartItemCount }) => {
    return (
        <button className="cart-button" onClick={onClick}>
            <img src="cartButton.png" alt="Cart" />
            <span className="cart-item-count">{cartItemCount}</span>
        </button>
    );
};

export default CartButton;
