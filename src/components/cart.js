import React, { useEffect, useState } from 'react';
import '../Cart.css';
import { connect } from 'react-redux';
import { updateCartItems, deleteFromCart } from '../actions'; 

const Cart = ({ cartItems, updateCartItems, deleteFromCart}) => {
// State to manage quantities
  const [quantities, setQuantities] = useState({});

  // Load cart items from local storage on component mount
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      updateCartItems(JSON.parse(storedCartItems));
    }
  }, [updateCartItems]);

  // Update local storage whenever cart items change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  if (!cartItems || cartItems.length === 0) {
    return <div>Cart is empty.</div>;
  }

//   const handleQuantityChange = (itemId, value) => {
//     setQuantities(prevQuantities => ({
//       ...prevQuantities,
//       [itemId]: Math.max(0, (prevQuantities[itemId] || 0) + value),
//     }));
//   };
  

  const handleQuantityInputChange = (itemId, newValue) => {
    const newQuantity = Math.max(0, newValue);
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [itemId]: newQuantity,
    }));
  };

 // Calculate total price based on quantities and prices
  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.displayValue);
    const quantity = quantities[item.id] || 1;
    return total + price * quantity; 
  }, 0);

  return (
    <div className="container my-5">
    <h2 className="text-center mb-4">Cart Items</h2>
    <div className="cart-items-container">
      {cartItems.map((fashion, index) => (
        <div key={index} className='cart-item card mb-3'>
          <div className="row g-0">
            <div className="col-md-3">
              <img alt="fashion" src={fashion.image} className="img-fluid rounded-start" />
            </div>
            <div className="col-md-9">
              <div className='card-body'>
                <div className='item-details'>
                  <h5 className='card-title item-name'>{fashion.title}</h5>
                  <p className='card-text item-price'>${fashion.price.displayValue}</p>
                  <p className='card-text item-summary'>{fashion.summary.slice(30)}...</p>
                  <div className="qty-container">
                    
                    <input
                      type="number"
                      name="qty"
                      value={quantities[fashion.id] || 1}
                      className="input-qty form-control"
                      onChange={e =>
                        handleQuantityInputChange(fashion.id, e.target.value)
                      }
                    />
                  </div>
                  <button className='btn btn-danger delete-btn' onClick={() => deleteFromCart(fashion.id)}>
                    <i className="fa-solid fa-trash"></i> Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <h1 className="text-center mt-4">Total - ${totalPrice.toFixed(2)}</h1>
  </div>
  );
};

const mapStateToProps = state => ({
  cartItems: state.fashion.items,
});

const mapDispatchToProps = {
  updateCartItems,
  deleteFromCart,
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
