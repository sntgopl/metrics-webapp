import PropTypes from 'prop-types';

const Stock = ({
  name, price, id,
}) => (
  <tr>
    <td>{name}</td>
    <td>{price}</td>
    <td>{id}</td>
  </tr>
);

Stock.propTypes = {
  name: PropTypes.node.isRequired,
  price: PropTypes.node.isRequired,
  id: PropTypes.node.isRequired,
};

export default Stock;
