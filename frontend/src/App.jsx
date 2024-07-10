import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/common/header/Header';
import Home from './components/home/Home';
import Footer from './components/common/footer/Footer';
import CartButton from './components/cartButton/CartButton';
import Cart from './components/cart/Cart';
import CartModal from './components/cart/cartModal/CartModal';
import MenuItems from './components/menuItems/MenuItems';
import './app.css';
import Navbar from './components/common/navbar/Navbar';
import HomeContent from './components/homeContent/HomeContent';

function App() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

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

    const HeaderWrapper = () => {
        const location = useLocation();
        return location.pathname === '/' ? <Header /> : null;
    };

    // Function to add item to cart
    const addToCart = (item) => {
        // Check if item is already in cart
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            // Item already exists, increase quantity
            const updatedItems = cartItems.map(cartItem =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            );
            setCartItems(updatedItems);
        } else {
            // Item not in cart, add with quantity 1
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    return (
        <Router>
            <Navbar />
            <HeaderWrapper />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                {/* Pass addToCart function to MenuItems */}
                <Route path="/menuitems" element={<MenuItems handleAddtoCart={addToCart} />} />
            </Routes>
            <HomeContent />
            <Footer />
            <CartButton onClick={() => setIsCartOpen(true)} cartItemCount={calculateCartItemCount()} />
            <CartModal
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                cartItems={cartItems}
                handleRemoveItem={handleRemoveItem}
                handleQuantityChange={handleQuantityChange}
                calculateTotal={calculateTotal}
            />
        </Router>
    );
}

export default App;
