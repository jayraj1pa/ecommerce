import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './Slices/cartSlice';
import wishlistSlice from './wishlistSlice';

const store = configureStore({
  reducer: {
    wishlistReducer: wishlistSlice, 
    cartReducer:cartSlice
  },
});

export default store;
