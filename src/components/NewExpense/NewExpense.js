//Import React and other Modules
import React from "react";
import ExpenseForm from "./ExpenseForm";

//Importing Css file
import "./NewExpense.css";

// We will transfer the form logic to another level to keep logic short
const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
