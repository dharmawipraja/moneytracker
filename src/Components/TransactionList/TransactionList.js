import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalState';
import TransactionItem from './TransactionItem';

const renderPageButton = (count, getTransactions) => {
  const page = Math.ceil(count / 5);
  const array = [];
  for (let i = 0; i < page; i++) {
    array.push(i);
  }

  return array.map((pageNumber) => (
    <button
      type='button'
      onClick={() => getTransactions(pageNumber)}
    >
      {pageNumber + 1}
    </button>
  ));
};

const TransactionList = () => {
  const { transactions, totalTransactions, getTransactions } = useContext(GlobalContext);

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
      {renderPageButton(totalTransactions, getTransactions)}
    </>
  );
};

export default TransactionList;
