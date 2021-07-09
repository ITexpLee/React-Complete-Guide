//Import React and other Modules
import React, {useState} from "react";
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

  // New State to render or cancel the form logic
  const [addExpense, setAddExpense] = useState(false);

  //Form cancel logic handler
  const expenseFormHandler = () => {
    //callback to change state (if true then false)
    setAddExpense(prevState => {
      return !prevState;
    });
  }

  //Cancel button logic
  const stopEditingHandler = () => {
    setAddExpense(prevState => {
      return !prevState;
    });
  }

  //Rendering logic either button or form depending wether the State ir true or not
  let addExpensebtn = <button onClick={expenseFormHandler}>Add New Expense</button>
  if(addExpense === true) {
    addExpensebtn = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} inExpenseForm={stopEditingHandler}/>
  }

  return (
    <div className="new-expense">
      {addExpensebtn}
    </div>
  );
};

export default NewExpense;
