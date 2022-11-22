import { configureStore } from '@reduxjs/toolkit';
import stockReducer from './stocks/stocks';

const store = configureStore({
  reducer: {
    stocks: stockReducer,
  },
});

export default store;
