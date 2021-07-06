//Import React and other Modules
import React from "react";
import ExpenseForm from "./ExpenseForm";

//Importing Css file
import "./NewExpense.css";

// We will transfer the form logic to another level to keep logic short
const NewExpense = (props) => {

  //Function for our custom event handler
  const saveExpenseDataHandler = (enteredExpenseData) => {
    //We now create the expense Data with entered Data and add id to be passed in Expense component
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }

    //User defined event to pass Expense with ID(list) to App.js
    props.onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
