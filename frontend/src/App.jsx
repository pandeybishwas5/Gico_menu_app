import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/common/header/Header';
import Home from './components/home/Home';
import Footer from './components/common/footer/Footer';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
              
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
