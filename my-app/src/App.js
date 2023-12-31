import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  const expenses = [
    {
      date: new Date(2023, 6, 28),
      title: 'Car Insurance',
      amount: 294.67,
    },
    {
      date: new Date(2023, 6, 28),
      title: 'Car Insurance 2',
      amount: 1.9,
    },
    {
      date: new Date(2023, 6, 28),
      title: 'Car Insurance 3',
      amount: 100.37,
    },
    {
      date: new Date(2023, 6, 28),
      title: 'Car Insurance 4',
      amount: 540.34,
    },
    {
      date: new Date(2023, 6, 28),
      title: 'Car Insurance 5',
      amount: 354.67,
    },
  ];
  const addExpenseHandler = (expense) => {
    expenses.push(expense);
  };
  return (
    <div className="App">
      <NewExpense onExpenseAdd={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
