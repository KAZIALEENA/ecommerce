import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FashionItem from './components/FashionItem';
import Navbar from './components/Navbar';
import Add from './components/Add';
import Cart from './components/cart';

function App(props) {
  const { cartItems } = props;
  return (  
    <>
    <Router>
      {/* Display the navigation bar */}
    <Navbar title="City Lights Books" product="products" add="Add a product" cart="addTocart" username="John Doe"/>
    {/* Define routes using react-router-dom */}
    <Routes>
      {/* Route for displaying fashion items */}
      <Route path="/" element={<FashionItem />} />
      {/* Route for adding a new product */}  
      <Route path="/add" element={<Add />} />
      {/* Route for displaying the cart */}
      <Route path="/cart" element={<Cart cartItems={cartItems} />} />
    </Routes>
  </Router>
  
  </>
  );
}

export default App;
