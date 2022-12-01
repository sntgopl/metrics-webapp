import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    <div className="table">
      {stocks.map((stock) => (
        <Stock
          key={stock.symbol}
          symbol={stock.symbol}
          name={stock.name}
          price={stock.price}
        />
      ))}
    </div>
  );
};

export default Home;
