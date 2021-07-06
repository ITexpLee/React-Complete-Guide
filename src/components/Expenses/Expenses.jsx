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
      <ExpenseItem
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      />
      <ExpenseItem
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
      />
      <ExpenseItem
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
      />
      <ExpenseItem
        title={props.item[3].title}
        amount={props.item[3].amount}
        date={props.item[3].date}
      />
    </Card>
    </div>
  );
};

export default Expenses;
