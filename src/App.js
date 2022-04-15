import ShoppingProvider from './context/ShoppingProvider';
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <ShoppingProvider>
        <Router>
        <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </ShoppingProvider>
    </div>
  );
}

export default App;
