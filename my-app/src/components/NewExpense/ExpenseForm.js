import './ExpenseForm.css';
import { useState } from 'react';
const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [dateValue, setdateValue] = useState('');
  // const titleChangeHandler = (event) => {
  //   setTitle(event.target.value);
  // };
  // const amountChangeHandler = (event) => {
  //   setAmount(event.target.value);
  // };
  // const dateChangeHandler = (event) => {
  //   setdateValue(event.target.value);
  // };
  const inputChnageHandler = (identifier, value) => {
    if (identifier == 'title') {
      setTitle(value);
    } else if (identifier == 'date') {
      setdateValue(value);
    } else if (identifier == 'amount') {
      setAmount(value);
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      dateValue: new Date(dateValue),
    };
    props.onSaveExpenseData(expenseData);
    setAmount('');
    setTitle('');
    setdateValue();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(event) =>
              inputChnageHandler('title', event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            min="0.01"
            step="0.01"
            onChange={(event) =>
              inputChnageHandler('amount', event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={dateValue}
            min="2023-01-01"
            max="2023-12-31"
            onChange={(event) => inputChnageHandler('date', event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
