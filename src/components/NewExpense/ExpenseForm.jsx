//Importing React and other Modules
import React, { useState } from "react";

//Importing Css
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //Using State to set title
  // The first stores the default value and the second if the function for updation
  const [enteredTitle, setEnteredTitle] = useState('');
  //Using State to set Amount
  const [enteredAmount, setEnteredAmount] = useState('');
  //Using State to set Date
  const [enteredDate, setEnteredDate] = useState('');

  //Event handlers for title, Amount and Date change
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  }
  
  //Event handler for Submission
  const submitHandler = (event) => {
    // To prevent default reload of page
    event.preventDefault();
    //Combine all the states change
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      // Constructing a new date with the date value user entered
      date: new Date(enteredDate)
    }
    //Passing the data and storing it on NewExpense component (Parent)
    props.onSaveExpenseData(expenseData);

    //Empty all the input fields after submission
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      {/* parts of Form component with title, Amount, Date */}
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" value={enteredAmount} step="0.01" onChange={amountChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" value={enteredDate} max="2022-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
      {/* Button to submit */}
        <button type="submit">Add Expense</button>
      {/* Button to cancel the form close it */}
        <button type="button" onClick={props.inExpenseForm}>Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
