import stockReducer, { getStock } from '../redux/stocks/stocks';

describe('Testing defined reducers', () => {
  const previousState = [];
  it('Should details page to be defined', () => {
    expect(stockReducer(previousState, getStock())).toBeDefined();
  });
});
