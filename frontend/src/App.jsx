import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/common/header/Header';
import Home from './components/home/Home';
import Footer from './components/common/footer/Footer';
import CartButton from './components/cartButton/CartButton';
import Cart from './components/cart/Cart';
import CartModal from './components/cart/cartModal/CartModal';
import MenuItems from './components/menuItems/MenuItems';
import './app.css';


function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

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
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/menuitems" element={<MenuItems />} />   
      </Routes>
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
