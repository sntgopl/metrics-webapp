import { configureStore } from '@reduxjs/toolkit';
import stockReducer from './stocks/stocks';

const store = configureStore({
  stock: stockReducer,
});

export default store;
