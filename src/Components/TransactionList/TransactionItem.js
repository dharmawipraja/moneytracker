import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalState';

function TransactionItem({ transaction }) {
  let className = 'plus';
  let sign = '+';
  if (transaction.amount < 0) {
    className = 'minus';
    sign = '-';
  }

  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className={className}>
      {transaction.text}
      <span>{sign}${Math.abs(transaction.amount)}</span>
      <button type='submit' className='delete-btn' onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li>
  );
}

export default TransactionItem;
