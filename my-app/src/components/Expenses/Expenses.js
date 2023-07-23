import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
export default function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem item={props.items[0]}></ExpenseItem>
      <ExpenseItem item={props.items[1]}></ExpenseItem>
      <ExpenseItem item={props.items[2]}></ExpenseItem>
      <ExpenseItem item={props.items[3]}></ExpenseItem>
    </Card>
  );
}
