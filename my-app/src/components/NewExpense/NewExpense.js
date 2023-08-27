import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expesneData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onExpenseAdd(expesneData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
