import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Stock from '../components/stocks';
import { getStock } from '../redux/stocks/stocks';
import './home.css';

const Home = () => {
  const stocks = useSelector((state) => state.stocks);
  const [search, setSearch] = useState('');
  let featureStock = stocks;
  if (search !== '') {
    featureStock = stocks.filter((item) => item.name
      .toLowerCase().includes(search.toLowerCase()));
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStock());
  }, [dispatch]);
  return (
    <div>
      <nav className="nav">
        <div>
          <h1>STOCKS</h1>
          <input className="searchbar" type="search" placeholder="Search Stock Name" onChange={(e) => setSearch(e.target.value)} />
        </div>
      </nav>
      <div className="table">
        {featureStock.map((stock) => (
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
