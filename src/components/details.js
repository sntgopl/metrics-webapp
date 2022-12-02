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
    <div className="stock">
      <h1>Details</h1>
      <NavLink to="/">
        <button type="button">Home</button>
      </NavLink>
      {filteredStock.map((stock) => (
        <div key={stock.symbol}>
          <h1>{stock.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Details;
