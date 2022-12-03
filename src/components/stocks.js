import PropTypes from 'prop-types';

const Stock = ({
  name, price, symbol,
}) => (
  <div className="stock">
    <h2>{symbol}</h2>
    <h4>{name}</h4>
    <h3>
      USD$
      {' '}
      {price}
    </h3>
  </div>
);

Stock.propTypes = {
  name: PropTypes.node.isRequired,
  price: PropTypes.node.isRequired,
  symbol: PropTypes.node.isRequired,
};

export default Stock;
