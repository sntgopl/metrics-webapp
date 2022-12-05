import PropTypes from 'prop-types';

const Stock = ({
  name, price, symbol, change, image,
}) => (
  <div className="stock">
    <div>
      <img
        style={{
          height: '7rem',
        }}
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
        USD$
        <p style={{
          color: change > 0 ? 'green' : 'red',
        }}
        >
          {price}
        </p>

      </h3>
    </div>
  </div>
);

Stock.propTypes = {
  name: PropTypes.node.isRequired,
  price: PropTypes.node.isRequired,
  symbol: PropTypes.node.isRequired,
  change: PropTypes.node.isRequired,
  image: PropTypes.node.isRequired,
};

export default Stock;
