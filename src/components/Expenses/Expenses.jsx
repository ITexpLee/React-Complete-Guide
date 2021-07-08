//Importing custom components in tree ascending order
import React, {useState} from "react";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseSelection/ExpensesFilter";
import ExpenseList from "./ExpenseList";

//Import Css files
import "./Expenses.css";

const Expenses = (props) => {

  //Keep hold of the year selected in State
  const [ filteredYear, setFilteredYear] = useState('2020');

  //User defined event function or attribute
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  //Filter incoming expenses according to Year
  //Here each expense has date property which is a date object. We get fullYear but it is a number so we convert
  // it into string
  const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);
  
  return (
    <div>
    <Card className="expenses">
    <ExpensesFilter onFilterChange={filterChangeHandler} year={filteredYear}/>
    {/* Conditional to check if expense array is empty or not*/}
    {/* Printing out our code by props.array to create ExpenseItem */}
    {/* We are abusing the fact that javaScript check condition from left */}
    {/* {filteredExpenses.length === 0 && <p>No Expenses Found.</p>} */}
    <ExpenseList items={filteredExpenses}/>
    {/* {filteredExpenses.length > 0 && filteredExpenses.map(expense => 
      <ExpenseItem 
      key={expense.id}
      title={expense.title} 
      amount={expense.amount} 
      date={expense.date}/>
      )} */}
    </Card>
    </div>
  );
};

export default Expenses;
