import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Balance from './Components/Balance/Balance';
import IncomeExpense from './Components/IncomeExpense/IncomeExpense';
import TransactionList from './Components/TransactionList/TransactionList';
import AddTransaction from './Components/AddTransaction/AddTransaction';
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
