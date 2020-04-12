export default (state, action) => {
  switch (action.type) {
    case 'GET_ALL_TRANSACTIONS':
      return {
        ...state,
        loading: false,
        transactions: action.payload
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
    case 'TRANSACTION_ERROR':
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
