//Importing components (children components or modules)

//Importing Css File
import "./ExpenseDate.css";

function ExpenseDate(props) {
  //Helper Variables or Js logic for the component
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

//exporting the component (to make is usable outside file)
export default ExpenseDate;
