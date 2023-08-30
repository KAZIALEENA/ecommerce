import React, { Component } from 'react';
import { connect } from 'react-redux'; // Import connect from react-redux
import { addProduct } from '../actions'; // Import your Redux action for adding a product
import '../App.css'; 


class Add extends Component {

 
  
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      price: {  
        displayValue: '', 
      },
      author: '',
      summary: '',
      image: '',
      rating: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'price') {
      this.setState((prevState) => ({
        price: {
          ...prevState.price,
          displayValue: value,
        },
      }));
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // Extract values from state
    const { title, price, author, summary, image, rating } = this.state;

    // Dispatch the addProduct action to add the new product
    this.props.addProduct({
      title,
      price,
      author,
      summary,
      image,
      rating,
    });

    // Clear the form fields after submission
    this.setState({
      title: '',
      price: {  
        displayValue: '', 
      },
      author: '',
      summary: '',
      image: '',
      rating: '',
    });

    // Show an alert or notification to indicate successful addition
    alert('Product added successfully!');
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} id="form" className="validate">
          <div className="form-field ">
            <label htmlFor="full-name">Name</label>
            <input
              type="text"
              name="title"
              id="full-name"
              placeholder="Product Name"
              value={this.state.title}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="price-input">Price</label>
            <input
              type="number"
              name="price"
              id="price-input"
              placeholder="Product Price"
              value={this.state.price.displayValue}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-field ">
            <label htmlFor="full-author">Author</label>
            <input
              type="text"
              name="author"
              id="full-author"
              placeholder="Author"
              value={this.state.author}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="summary-input">summary</label>
            <textarea
              name="summary"
              id="summary-input"
              placeholder="Product summary"
              value={this.state.summary}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="image-input">Image URL</label>
            <textarea
              name="image"
              id="image-input"
              placeholder="Product image"
              value={this.state.image}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="rating-input">Rating</label>
            <textarea
              name="rating"
              id="rating-input"
              placeholder="Product Rating"
              value={this.state.rating}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-field">
            <input type="submit" value="ADD" />
          </div>
        </form>
      </div>
    );
  }
}



// Connect the component to Redux and map the addProduct action to props
export default connect(null, { addProduct })(Add);
