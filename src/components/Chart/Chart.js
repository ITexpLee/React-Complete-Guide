//Import React and other modules
import React from "react";
import ChartBar from "./ChartBar";

//Importing Css file
import "./Chart.css";

const Chart = (props) => {
  //TO get the max value possible
  //Here we pass our Array of objects (DataPoints) which is then mapped thus passing individual object. With each object value extracted
  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        // Every data point in dataPoints Array has a value property.
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
