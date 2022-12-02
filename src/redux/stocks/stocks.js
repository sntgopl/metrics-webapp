import { createAsyncThunk } from '@reduxjs/toolkit';

const Types = {
  GET_STOCKS: 'GET_STOCKS',
};

export const getStocks = (payload) => (
  {
    type: Types.GET_STOCKS,

    payload,
  }
);

const initialState = [];

export const getStock = createAsyncThunk(Types.GET_STOCKS, async () => {
  const result = await fetch('https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=6622e5e4f7d591f15bccf177716f9851', {
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
  if (action.type === `${Types.GET_STOCKS}/fulfilled`) {
    list = action.payload.map((element) => {
      const stock = {};
      stock.name = element.name;
      stock.symbol = element.symbol;
      stock.price = element.price;
      stock.change = element.change;
      stock.changesPercentage = element.changesPercentage;
      return stock;
    });
    return list;
  } return state;
};

export default stockReducer;
