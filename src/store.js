// store.js
import { configureStore } from '@reduxjs/toolkit';
import fashionReducer from './reducers';


const store = configureStore({
    reducer: {
        fashion: fashionReducer,
       
    }
});
// store.dispatch({
//     type: 'ADD_FASHION',
//     fashion: [{name: 'Cotton T-Shirt'}]
//   });

export default store;
