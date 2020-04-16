import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalState';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [type, setType] = useState(0);
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const resetDropdown = () => {
    const dropDown = document.getElementById('dropdown');
    dropDown.selectedIndex = 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      text,
      amount: amount * type
    };

    addTransaction(newTransaction);
    resetDropdown();
    setText('');
    setAmount(0);
    setType(0);
  };

  const onSelectDropdown = (event) => {
    const { value } = event.target;
    if (value === 'income') {
      setType(1);
    } else {
      setType(-1);
    }
  };

  const renderDropdown = () => (
    <select id='dropdown' className='transaction-type' onChange={(e) => onSelectDropdown(e)} required>
      <option value=''>Choose type...</option>
      <option value='income'>Income</option>
      <option value='expense'>Expense</option>
    </select>
  );

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Transaction Name</label>
          <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter text...' />
        </div>
        <div className='form-control'>
          <label htmlFor='transaction-type'>
            Transaction Type
          </label>
          <br />
          {renderDropdown()}
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount
          </label>
          <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount...' min='1' />
        </div>
        <button type='submit' className='btn'>Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
