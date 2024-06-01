import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/ProductsSlice';

export const Store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
