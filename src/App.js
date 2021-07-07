import React, { useState } from "react";
import "./App.css";
//Importing custom components in tree ascending order
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

//Fetching Data Object for expenses (Initial Expense default State)
const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  // Using State to keep track of expenses
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  //Creating a user defined function for event to get Expense
  const addExpenseHandler = (expense) => {
    // Use the data of user created expense to store in state
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  return (
    <div>
      {/* We will pass all data to be required in expense item component as attributes*/}
      {/* We can pass the entire array of objects as attributes too*/}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
