//Importing components (childrens)
import ExpenseDate from "./ExpenseDate";

//Importing css file
import "./ExpenseItem.css";

//Always Remember that Component is simply JavaScript function
//Props contains all the attributes passes. props.attributeName to access them
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      {/* Elements or simply custom elements with nothing in between both tags can be written like this */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <p className="expense-item__price">${props.amount}</p>
      </div>
    </div>
  );
}

//Exporting the file (necessary)
export default ExpenseItem;
