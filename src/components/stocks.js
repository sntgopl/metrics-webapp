import PropTypes from 'prop-types';
import {
  AiOutlineRise, AiOutlineFall, AiFillCaretUp,
  AiFillCaretDown,
} from 'react-icons/ai';
import './stocks.css';

const Stock = ({
  name, price, symbol, change, image, changesPercentage, changesPercentage7d,
}) => (
  <div className="stock">
    <div>
      <img
        style={{
          padding: '1rem',
          border: '3px inset gold',
          borderRadius: '1rem',
          boxShadow: '3px 3px 3px gold',
        }}
        className="imageContainer"
        src={image}
        alt="Coin Logo"
      />
    </div>
    <div>
      <h2>{symbol}</h2>
      <h4>{name}</h4>
      <h3 style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
      }}
      >
        USD
        <p style={{
          color: changesPercentage > 0 ? 'green' : 'red',
        }}
        >
          $
          {price}
          {' '}
        </p>

      </h3>
    </div>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    }}
    >
      <div>
        <p>
          24 h:
          {' '}
        </p>
        {change > 0 && (
          <AiFillCaretUp size={30} color="green" />
        )}
        {change < 0 && (
          <AiFillCaretDown size={30} color="red" />
        )}
      </div>
      <div>
        <p>
          7 d:
          {' '}
        </p>
        {changesPercentage7d > 0 && (
          <AiOutlineRise size={30} color="green" />
        )}
        {changesPercentage7d < 0 && (
          <AiOutlineFall size={30} color="red" />
        )}
      </div>
    </div>
  </div>
);

Stock.propTypes = {
  name: PropTypes.node.isRequired,
  price: PropTypes.node.isRequired,
  symbol: PropTypes.node.isRequired,
  change: PropTypes.node.isRequired,
  image: PropTypes.node.isRequired,
  changesPercentage: PropTypes.node.isRequired,
  changesPercentage7d: PropTypes.node.isRequired,
};

export default Stock;
