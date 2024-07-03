import React, { useState } from 'react';
import './cart.css';


const Cart = () => {
   
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Dish 1',
            price: 10,
            quantity: 1,
        },
        {
            id: 2,
            name: 'Dish 2',
            price: 15,
            quantity: 2,
        },
    ]);

    const handleRemoveItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const handleQuantityChange = (id, quantity) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: quantity } : item
        ));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const calculateCartItemCount = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <div className="cart">
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
    );
};

export default Cart;
