import React from "react";
import classes from "./TodoList.module.css";

// use the a custom type to specifyy the prop type]
const TodoList: React.FC<{ text: string }> = (prop) => {
  return <li className={classes.item}>{prop.text}</li>;
};

export default TodoList;
