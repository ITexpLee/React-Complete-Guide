//Import React and other Important modules
import React from "react";
import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  //Incrementing our dataPoints value according to our filtered expenses (Which year has how many instaces)
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); //Starting at 0 (Index of january returned by JavaScript). It a number
    chartDataPoints[expenseMonth].value += expense.amount; //Here charDataPoints is an array having multiple objects. By coincidence the objects with month labels are in the same sequence as month returned by JavaScript
  }
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;
