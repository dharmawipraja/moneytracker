import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalState';


const Balance = () => {
  const { totalIncome, totalExpense } = useContext(GlobalContext);
  const totalBalance = totalIncome - totalExpense;
  const sign = totalBalance < 0 ? '-' : '';

  return (
    <>
      <h4>Your Balance</h4>
      <h1>{sign}${Math.abs(totalBalance)}</h1>
    </>
  );
};

export default Balance;
