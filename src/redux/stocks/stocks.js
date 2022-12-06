import { createAsyncThunk } from '@reduxjs/toolkit';

const Types = {
  GET_STOCKS: 'GET_STOCKS',
  ADD_FAVORITE: 'ADD_FAVORITE',
  REMOVE_FAVORITE: 'REMOVE_FAVORITE',
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

export const addFavorite = (payload) => (
  {
    type: Types.ADD_FAVORITE,
    payload,
  }
);

export const removeFavorite = (payload) => (
  {
    type: Types.REMOVE_FAVORITE,
    payload,
  }
);

const stockReducer = (state = initialState, action) => {
  let list = [];
  switch (action.type) {
    case `${Types.GET_STOCKS}/fulfilled`:
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
        return { ...stock, favorite: false };
      });
      return list;
    case Types.ADD_FAVORITE:
      list = state.map((element) => {
        if (element.symbol !== action.payload) {
          return element;
        }
        return { ...element, favorite: true };
      });
      return list;
    case Types.REMOVE_FAVORITE:
      list = state.map((element) => {
        if (element.symbol !== action.payload) {
          return element;
        }
        return { ...element, favorite: false };
      });
      return list;
    default:
      return state;
  }
};

export default stockReducer;
