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
            24 hour change:
            <br />
            <br />
            $
            {' '}
            {stock.change}
          </p>
          <p>
            Change percentage:
            <br />
            <br />
            {stock.changesPercentage}
            {' '}
            %
          </p>
        </div>
      ))}
      <NavLink to="/">
        <button type="button">Home</button>
      </NavLink>
    </div>
  );
};

export default Details;
