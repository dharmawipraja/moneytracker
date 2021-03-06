export default (state, action) => {
  switch (action.type) {
    case 'GET_ALL_TRANSACTIONS':
      return {
        ...state,
        loading: false,
        transactions: action.payload.data,
        totalTransactions: action.payload.totalTransactions
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        loading: true,
        transactions: [action.payload, ...state.transactions]
      };
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        loading: true,
        transactions: state.transactions.filter((transaction) => transaction.id !== action.payload)
      };
    case 'TOTAL_INCOME':
      return {
        ...state,
        loading: false,
        totalIncome: action.payload
      };
    case 'TOTAL_EXPENSE':
      return {
        ...state,
        loading: false,
        totalExpense: action.payload
      };
    case 'TRANSACTION_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case 'REMOVE_NOTIFICATIONS':
      state.error.pop();
      return {
        ...state,
      };
    default:
      return state;
  }
};
