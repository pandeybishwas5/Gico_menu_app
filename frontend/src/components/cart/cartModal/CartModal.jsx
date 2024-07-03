import React from 'react';
import './cartmodal.css';

const CartModal = ({ isOpen, onClose, cartItems, handleRemoveItem, handleQuantityChange, calculateTotal }) => {
    if (!isOpen) return null;

    return (
        <div className="cart-modal-overlay">
            <div className="cart-modal">
                <button className="close-button" onClick={onClose}>×</button>
                <h2>Your Cart</h2>
                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <h3>{item.name}</h3>
                                <p>${item.price}</p>
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                    min="1"
                                />
                                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                            </div>
                        ))
                    )}
                </div>
                <div className="cart-total">
                    <h3>Total: ${calculateTotal()}</h3>
                    <button className="checkout-button">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
