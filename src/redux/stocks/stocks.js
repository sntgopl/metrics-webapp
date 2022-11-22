import { createAsyncThunk } from '@reduxjs/toolkit';

export const getStocks = (payload) => (
  {
    type: 'GET_STOCKS',
    payload
  }
);

const initialState = [];

export const getStock = createAsyncThunk(GET_STOCKS, async () => {
  const result = await fetch('https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=6622e5e4f7d591f15bccf177716f9851', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });
  const response = result.json();
  return response;
});


const stockReducer = (state = initialState, action) => {
  let list = [];
  if (action.type === GET_STOCKS) {
    list = action.payload.map((element) => {
      const stock = {};
      stock.id = element.id;
      stock.name = element.symbol;
      stock.price = element.price;
      return stock;
    });
    return list;
  } else return state;
};

export default stockReducer;
