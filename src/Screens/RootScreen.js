import React, { useContext, useEffect } from 'react';
import { ToastProvider } from 'react-toast-notifications';

import { GlobalContext } from '../Context/GlobalState';
import Header from '../Components/Header/Header';
import Balance from '../Components/Balance/Balance';
import IncomeExpense from '../Components/IncomeExpense/IncomeExpense';
import TransactionList from '../Components/TransactionList/TransactionList';
import AddTransaction from '../Components/AddTransaction/AddTransaction';
import Loading from '../Components/Loading/Loading';

const renderContent = () => (
  <>
    <ToastProvider
      autoDismiss
      autoDismissTimeout={3000}
    >
      <Header />
    </ToastProvider>
    <div className='container'>
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransaction />
    </div>
  </>
);

const renderLoading = (isLoading) => (
  <Loading isShowModal={isLoading} />
);

function RootScreen() {
  const { loading, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
  }, [loading]);

  return (
    <>
      {renderLoading(loading)}
      {renderContent()}
    </>
  );
}

export default RootScreen;
