//Importing imp Components and Modules
import React from 'react';
import './ExpensesFilter.css';
import '../Expenses/Expenses';

const ExpensesFilter = (props) => {

  //Event handler for filter Selection
  const expensesFilterHandler = (event) => {
    props.onFilterChange(event.target.value);
  }  

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={expensesFilterHandler} value={props.year}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;