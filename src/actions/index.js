
  // actionTypes.js
// Define action types for different actions
  import { mockAddProduct } from './mockAPI';
    export const  ADD_FASHION = 'ADD_FASHION';
    export const  ADD_CART = 'ADD_CART';
    export const  UPDATE_FASHION = 'UPDATE_FASHION';
    export const  DELETE_FASHION = 'DELETE_FASHION';
    export const  ADD_PRODUCT = 'ADD_PRODUCT';
    export const  ADD_TO_CART = 'ADD_TO_CART';
    export const UPDATE_CART_ITEMS = 'UPDATE_CART_ITEMS';
    export const DELETE_FROM_CART = 'DELETE_FROM_CART';


    // actions.js
// Action creators for adding fashion data
    export const addFashion = (fashionData) => {
        return {
            type: 'ADD_FASHION',
            fashion: fashionData
        };
    };

    // Action creators for adding fashion data to cart
    export const addCart = (fashionData) => {
        return {
            type: 'ADD_CART',
            fashion: fashionData
        };
    };
   
    // Action creator for updating fashion data
    export const updateFashion = (updatedData) => {
        return {
          type: 'UPDATE_FASHION',
          payload: updatedData,
        };
      };

      // Action creator for deleting fashion data
      export const deleteFashion = (id) => ({
        type: 'DELETE_FASHION',
        payload: id,
      });

      // Asynchronous action creator for adding product data
      export const addProduct = (productData) => {
        return async (dispatch) => {
          try {
            // Simulate API call
            const response = await mockAddProduct(productData);
      
            // Dispatch success action
            dispatch({
              type: ADD_PRODUCT,
              payload: response,
            });
          } catch (error) {
            // Handle error if needed
          }
        };
      };

      // Action creator for adding an item to the cart
      export const addToCart = item => ({
        type: 'ADD_TO_CART',
        payload: item,
      });

      // Action creator for updating cart items
      export const updateCartItems = (cartItems) => {
        return {
          type: UPDATE_CART_ITEMS,
          payload: cartItems,
        };
      };

      // Action creator for deleting an item from the cart
      export const deleteFromCart = (itemId) => ({
        type: DELETE_FROM_CART,
        payload: itemId,
      });