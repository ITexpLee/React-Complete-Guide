//Importing Css file and Other components
import React from "react";
import "./Card.css";

// This component isssimply used as container around other components.
const Card = (props) => {
  // We can access the className defined on Card element as props. So we take that and add.
  // As this logic is added to the Card element it automatically adds the className wherever it is defined as wrapper
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
