import "./App.css";
//Importing custom components in tree ascending order
import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <h2> Let's get Started!</h2>
      <ExpenseItem />
    </div>
  );
}

export default App;
