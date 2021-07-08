//Importing components (childrens)
import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

//Importing css file
import "./ExpenseItem.css";

//Always Remember that Component is simply JavaScript function
//Props contains all the attributes passes. props.attributeName to access them
const ExpenseItem = (props) => {
  // Using useState hook from React library to create state changing variable
  //title = value in props title, setTitle is the function for changing title
  // Changing title with click handler

  return (
    <li>
    <Card className="expense-item">
      {/* Elements or simply custom elements with nothing in between both tags can be written like this */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <p className="expense-item__price">${props.amount}</p>
      </div>
      {/* Creating Button tag to make it dynamic */}
    </Card>
    </li>
  );
};

//Exporting the file (necessary)
export default ExpenseItem;
