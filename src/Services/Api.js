import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1/transactions';

export const getAllTransactions = async () => {
  let response;
  try {
    response = await axios.get(BASE_URL);
  } catch (err) {
    response = err.response;
  }

  return response;
};

export const deleteTransactionById = async (id) => {
  let response;
  try {
    response = await axios.delete(`${BASE_URL}/${id}`);
  } catch (err) {
    response = err.response;
  }

  return response;
};

export const addNewTransaction = async (transaction) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  let response;
  try {
    response = await axios.post(BASE_URL, transaction, config);
  } catch (err) {
    response = err.response;
  }

  return response;
};
