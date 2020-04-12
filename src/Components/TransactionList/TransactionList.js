import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../Context/GlobalState';
import TransactionItem from './TransactionItem';

const TransactionList = () => {
  const { transactions, getTransactions, loading } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
  }, [loading]);

  return (
    <>
      <h3>Transaction History</h3>
      <ul className='list'>
        { transactions.map((transaction) => (
          <TransactionItem
            key={transaction._id}
            transaction={transaction}
          />
        )) }
      </ul>
    </>
  );
};

export default TransactionList;
