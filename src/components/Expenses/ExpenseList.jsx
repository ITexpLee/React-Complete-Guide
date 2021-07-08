//Importing imp react and other modules
import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = (props) => {
//Extra for past code
// Using logic operators to check what content to render
// let expensesContent = <p>No expense Found.</p>
if(props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
}
  return (
      <ul className="expenses-list">
      {props.items.map(expense => (
        <ExpenseItem 
        key={expense.id}
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date} />
      ))}
      </ul>
  );  
};

export default ExpenseList;