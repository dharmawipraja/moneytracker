import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import AppReducer from './AppReducer';
import { getAllTransactions, addNewTransaction, deleteTransactionById } from '../Services/Api';

// Initial State
const initialState = {
  transactions: [],
  totalTransactions: 0,
  totalIncome: 0,
  totalExpense: 0,
  error: null,
  loading: true
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const getTransactions = async (value = 0) => {
    const { data } = await getAllTransactions(value);

    if (data.success) {
      dispatch({
        type: 'GET_ALL_TRANSACTIONS',
        payload: data
      });
      dispatch({
        type: 'TOTAL_INCOME',
        payload: data.totalIncome
      });
      dispatch({
        type: 'TOTAL_EXPENSE',
        payload: data.totalExpense
      });
    } else {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: data.error
      });
    }
  };

  const addTransaction = async (transaction) => {
    const { data } = await addNewTransaction(transaction);

    if (data.success) {
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: data.data
      });
    } else {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: data.error
      });
    }
  };

  const deleteTransaction = async (id) => {
    const { data } = await deleteTransactionById(id);

    if (data.success) {
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
      });
    } else {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: data.error
      });
    }
  };

  const removeNotifications = () => {
    dispatch({
      type: 'REMOVE_NOTIFICATIONS'
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        totalTransactions: state.totalTransactions,
        totalIncome: state.totalIncome,
        totalExpense: state.totalExpense,
        error: state.error,
        loading: state.loading,
        getTransactions,
        addTransaction,
        deleteTransaction,
        removeNotifications,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.element.isRequired
};
