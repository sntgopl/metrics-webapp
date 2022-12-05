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
  const result = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d', {
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
      stock.symbol = element.symbol.toUpperCase();
      stock.price = element.current_price.toFixed(3);
      stock.image = element.image;
      stock.change = element.price_change_24h.toFixed(3);
      stock.marketcap = element.market_cap;
      stock.changesPercentage = element.price_change_percentage_24h.toFixed(3);
      stock.changesPercentage7d = element.price_change_percentage_7d_in_currency.toFixed(3);
      return stock;
    });
    return list;
  } return state;
};

export default stockReducer;
