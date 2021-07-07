//Importing custom components in tree ascending order
import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseSelection/ExpensesFilter";

//Import Css files
import "./Expenses.css";

const Expenses = (props) => {

  //Keep hold of the year selected in State
  const [ filteredYear, setFilteredYear] = useState('2020');

  //User defined event function or attribute
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  return (
    <div>
    <Card className="expenses">
    <ExpensesFilter onFilterChange={filterChangeHandler} year={filteredYear}/>
      {/* Printing out our code by props.array to create ExpenseItem */}
      {props.items.map(expense => 
      <ExpenseItem 
      key={expense.id}
      title={expense.title} 
      amount={expense.amount} 
      date={expense.date}/>
      )};
    </Card>
    </div>
  );
};

export default Expenses;
