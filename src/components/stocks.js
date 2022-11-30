import PropTypes from 'prop-types';

const Stock = ({
  name, price, symbol,
}) => (
  <tr>
    <td>{name}</td>
    <td>{price}</td>
    <td>{symbol}</td>
  </tr>
);

Stock.propTypes = {
  name: PropTypes.node.isRequired,
  price: PropTypes.node.isRequired,
  symbol: PropTypes.node.isRequired,
};

export default Stock;
