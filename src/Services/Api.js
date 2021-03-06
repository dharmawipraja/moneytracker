import axios from 'axios';

const BASE_URL = new URL('http://localhost:5000/api/v1/transactions');

export const getAllTransactions = async (query) => {
  let response;
  const NEW_URL = new URL(`${BASE_URL}?page=${query}`);
  try {
    response = await axios.get(NEW_URL);
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
