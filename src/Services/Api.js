import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1/transactions';

export const getAllTransactions = async () => {
  const response = await axios.get(BASE_URL);

  return response;
};

export const deleteTransactionById = async (id) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);

  return response;
};

export const addNewTransaction = async (transaction) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const response = await axios.post(BASE_URL, transaction, config);

  return response;
};
