import PropTypes from 'prop-types';

import { Table, TabelHead } from './Transaction.styled';

const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TabelHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TabelHead>
      <tbody>
        {items.map(item => (
          <tr class="" key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
