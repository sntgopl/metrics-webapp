import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import Stock from '../components/stocks';
import { getStock } from '../redux/stocks/stocks';

const Home = () => {
  const stocks = useSelector((state) => state.stocks);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!stocks.length) {
      dispatch(getStock);
    }
  }, []);
  return (
    <Table>
      <tbody>
        {stocks.map((stock) => (
          <Stock
            key={stock.id}
            id={stock.id}
            name={stock.id}
            price={stock.id}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default Home;