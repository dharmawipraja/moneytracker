import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -10 },
    { id: 2, text: 'Salary', amount: 800 },
    { id: 3, text: 'Books', amount: -40 },
    { id: 4, text: 'Investment', amount: 100 },
    { id: 5, text: 'Car service', amount: -150 }
  ]
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};
