import PropTypes from 'prop-types';

const Stock = ({
  name, price, symbol,
}) => (
  <div className="stock">
    <p>{name}</p>
    <p>{price}</p>
    <p>{symbol}</p>
  </div>
);

Stock.propTypes = {
  name: PropTypes.node.isRequired,
  price: PropTypes.node.isRequired,
  symbol: PropTypes.node.isRequired,
};

export default Stock;
