import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Stock from '../components/stocks';
import { getStock } from '../redux/stocks/stocks';
import './home.css';

const Home = () => {
  const stocks = useSelector((state) => state.stocks);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!stocks.length) {
      dispatch(getStock());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <nav className="nav">
        <div>
          <h1>STOCKS</h1>
          <input type="search" placeholder="" />
        </div>
      </nav>
      <div className="table">
        {stocks.map((stock) => (
          <NavLink key={stock.symbol} className="navlink" to={`/${stock.symbol}`}>
            <div key={stock.symbol}>
              <Stock
                key={stock.symbol}
                symbol={stock.symbol}
                name={stock.name}
                price={stock.price}
              />
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Home;
