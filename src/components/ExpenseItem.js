//Importing css file
import "./ExpenseItem.css";

//Always Remember that Component is simply JavaScript function
function ExpenseItem() {
  //Defining the Date to be used
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <p className="expense-item__price">${expenseAmount}</p>
      </div>
    </div>
  );
}

//Exporting the file (necessary)
export default ExpenseItem;
