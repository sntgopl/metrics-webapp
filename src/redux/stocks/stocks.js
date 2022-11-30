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

const initialState = [
  // {
  //   id: 1,
  //   name: 'APPL',
  //   price: '$59',
  // },
  // {
  //   id: 2,
  //   name: 'HOLA',
  //   price: '$77',
  // },
  // {
  //   id: 3,
  //   name: 'COCA',
  //   price: '$66',
  // },
  // {
  //   id: 4,
  //   name: 'SONY',
  //   price: '$33',
  // },
  // {
  //   id: 5,
  //   name: 'MSF',
  //   price: '$44',
  // },
  // {
  //   id: 6,
  //   name: 'TSL',
  //   price: '$111',
  // },
];

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
      return stock;
    });
    return list;
  } return state;
};

export default stockReducer;
