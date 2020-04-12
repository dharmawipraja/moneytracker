import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalState';

const IncomeExpense = () => {
  const { totalIncome, totalExpense } = useContext(GlobalContext);

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>+${totalIncome}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>-${totalExpense}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
