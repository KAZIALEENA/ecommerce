  import React, { Component } from 'react';
  import { connect } from 'react-redux';
  import { addToCart } from '../actions';
  import '../App.css';


  class FashionCard extends Component {
    constructor(props) {
      super(props);
      
      // Initial state for editing and form fields
      this.state = {
        isEditing: false,
        updatedtitle: props.fashions.title,
        updatedprice: props.fashions.price.displayValue,
        updatedauthor:  props.fashions.author,
        updatedsummary: props.fashions.updatedsummary
      };
    }
    
    // Handler for adding item to cart
    handleCartClick = () => {
      const { fashions, addToCart } = this.props;
      addToCart(fashions);
      alert("Item Added Successfully");
    };
    
    // Toggle edit form
    toggleEditForm = () => {
      this.setState(prevState => ({
        isEditing: !prevState.isEditing,
      }));
    };
 
    // Handlers for updating form field values
    handlenameChange = event => {
      this.setState({ updatedtitle: event.target.value });
    };

    handlepriceChange = event => {
      this.setState({ updatedprice: event.target.value });
    };

    handleauthorChange = event => {
      this.setState({ updatedauthor: event.target.value });
    };

    handlesummaryChange = event => {
      this.setState({ updatedsummary: event.target.value });
    };

     // Handle update button click
    handleUpdate = () => {
      const { id, onhandleEditData } = this.props;
      const { updatedtitle, updatedauthor, updatedprice, updatedsummary } = this.state;

      const updatedDat = {
        id,
        title: updatedtitle,
        price: updatedprice,
        author: updatedauthor,
        summary: updatedsummary,
      };
 
      console.log("Updated data:", updatedDat);
      
      // Call the provided function to handle edit data
      onhandleEditData(updatedDat);

      this.setState({ isEditing: false });
    };

   
    

    // Determine CSS classes for inputs based on editing state
    render() {
      const { isEditing} = this.state;
      const nameInputClass = isEditing ? 'editing' : '';
      const priceInputClass = isEditing ? 'editing' : '';
      const authorInputClass = isEditing ? 'editing' : '';
      const summaryInputClass = isEditing ? 'editing' : '';
      const { fashions, onhandleDelete, id } = this.props;
      return (
        <>
        <div className='fashion-card bg-white shadow mt-3 '>
          <div className="row">
          <div className="col-md-2">
            <img alt="fashion" src={fashions.image} />
            </div>
            
          {this.state.isEditing ? (
            <div >
              <label>name:</label>
              <input type="text" value={this.state.updatedtitle} onChange={this.handlenameChange} className={nameInputClass} />
              <br />
              <label>price:</label>
              <input type="text" value={this.state.updatedprice} onChange={this.handlepriceChange} className={priceInputClass} />
              <br />
              <label>author:</label>
              <input type="text" value={this.state.updatedauthor} onChange={this.handleauthorChange} className={authorInputClass} />
              <br />
              <label>summary:</label>
              <input type="text" value={this.state.updatedsummary} onChange={this.handlesummaryChange} className={summaryInputClass} />
              <br />
              <button className="btn btn-primary" onClick={this.handleUpdate}>Save</button>
              <button className="btn btn-secondary" onClick={this.toggleEditForm}>Cancel</button>
            </div>
            
          ) : (
            <div className="col-md-8">
              <div className='card-body'>
              <h5 className='card-title'>{fashions.title}</h5>
              <p className='card-text'>Author: {fashions.author}</p>
              <p className='card-text price'>Price: ${fashions.price.displayValue}</p>
              <div className='summary'>{fashions.summary.slice(0, 300)}....</div>
              </div>
              <div className="d-flex justify-content-between align-items-end mt-3">
              <div className="mt-3 d-flex justify-content-end ">
              <div className="rating">
                   {Array.from({ length: fashions.rating }, (_, index) => (
                   <span key={index} className="fas fa-star"></span>
                 ))}
              </div>
                <button className='btn btn-primary me-2 btn1' onClick={this.handleCartClick}><i className="fas fa-cart-shopping"></i> CART</button>
                <button className='btn btn-secondary me-2 btn1' onClick={() => this.toggleEditForm()}><i className="fas fa-pen-to-square"></i> EDIT</button>
                <button className='btn btn-danger btn1' onClick={() => onhandleDelete(id)}><i className="fas fa-trash"></i> DELETE</button>
             </div>
             </div>
            </div>
          )}
          </div>
        </div>
        
        </>
      );
    }
  }
 // Connect the component to Redux and map the addToCart action to props
  export default connect(null, { addToCart })(FashionCard);
