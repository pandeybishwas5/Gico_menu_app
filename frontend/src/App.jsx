import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/common/header/Header';
import Home from './components/home/Home';
import Footer from './components/common/footer/Footer';
import CartButton from './components/cartButton/CartButton';
import CartModal from './components/cart/cartModal/CartModal';
import MenuItems from './components/menuItems/MenuItems';
import './app.css';
import Navbar from './components/common/navbar/Navbar';
import HomeContent from './components/homeContent/HomeContent';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Reservation from './components/reservation/Reservation';
import ScrollToTop from './components/scrolltotop/ScrollToTop';
import Login from './components/login/Login';

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

    const ConditionalHomeContent = () => {
        const location = useLocation();
        const isHomeView = location.pathname === '/';
        return isHomeView ? <HomeContent /> : null;
    };

    const HeaderWrapper = () => {
        const location = useLocation();
        return location.pathname === '/' ? <Header /> : null;
    };

    const addToCart = (item) => {
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            const updatedItems = cartItems.map(cartItem =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            );
            setCartItems(updatedItems);
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const handleCheckoutClick = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/order/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    items: cartItems,
                    total_price: calculateTotal(),
                }),
            });
    
            const data = await response.json();
    
            if (data.status === 'success') {
                alert(`Order placed successfully! Order ID: ${data.order_id}`);
                onClose();
            } else {
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            alert('An error occurred while placing the order.');
            console.error('Checkout error:', error);
        }
    };
    

    return (
        <div>
        <ScrollToTop />
            <Navbar />
            <HeaderWrapper />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<MenuItems handleAddtoCart={addToCart} />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/reservations" element={<Reservation />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <ConditionalHomeContent />
            <Footer />
            <CartButton onClick={() => setIsCartOpen(true)} cartItemCount={calculateCartItemCount()} />
            <CartModal
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                cartItems={cartItems}
                handleRemoveItem={handleRemoveItem}
                handleQuantityChange={handleQuantityChange}
                calculateTotal={calculateTotal}
                handleCheckoutClick={handleCheckoutClick}
            />
        </div>
    );
}

export default App;
