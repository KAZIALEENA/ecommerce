import { ADD_FASHION, ADD_CART, UPDATE_FASHION, DELETE_FASHION, ADD_PRODUCT, ADD_TO_CART, DELETE_FROM_CART } from "../actions";

const initialState = {
    list: [],
     // Corrected property name here
    products: [],
    items: []
};

function fashionReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FASHION: // Using action type constants
            return { ...state, list: [...state.list, ...action.fashion] };
        case ADD_CART: // Using action type constants
            return {
                ...state,
                addToCart: [...state.addToCart, ...action.fashion], 
            };
            case UPDATE_FASHION:
                return {
                  ...state,
                  list: action.payload, // Update the fashion data
                };
                case DELETE_FASHION:
                    return {
                      ...state,
                      list: state.list.filter(item => item.id !== action.payload),
                    };
                case ADD_PRODUCT:
                     return {
                          ...state,
                          products: action.payload, // Update the products data
                    };
                case ADD_TO_CART:
                      return {
                             ...state,
                              items: [...state.items, action.payload],
                    };

                    case DELETE_FROM_CART:
                        return {
                          ...state,
                          items: state.items.filter(item => item.id !== action.payload),
                        };
                default:
                       return state;
    }
}

export default fashionReducer;
