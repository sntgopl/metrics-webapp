import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { getStock } from '../redux/stocks/stocks';

const Details = () => {
  const params = useParams();
  const stocks = useSelector((state) => state.stocks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStock());
  }, [dispatch]);
  const filteredStock = stocks.filter((stock) => (stock.symbol === params.id));

  return (
    <div className="details">
      <h1>Details</h1>
      {filteredStock.map((stock) => (
        <div key={stock.symbol} className="detail-info">
          <img className="image" src={stock.image} alt="Coin Logo" />
          <h1>
            {stock.symbol}
          </h1>
          <h3>
            {stock.name}
          </h3>
          <h2>
            USD$:
            {' '}
            {stock.price}
          </h2>
          <p>
            Market Capitalization:
            <br />
            $
            {' '}
            {stock.marketcap}
          </p>
          <div>
            24 hour change:
            <br />
            <h2 style={{
              color: stock.changesPercentage > 0 ? 'green' : 'red',
            }}
            >
              $
              {' '}
              {stock.change}
            </h2>
          </div>
          <div>
            Change percentage:
            <br />
            <h2 style={{
              color: stock.changesPercentage > 0 ? 'green' : 'red',
            }}
            >
              {stock.changesPercentage}
              {' '}
              %
            </h2>
          </div>
        </div>
      ))}
      <NavLink to="/">
        <button type="button">Home</button>
      </NavLink>
    </div>
  );
};

export default Details;
