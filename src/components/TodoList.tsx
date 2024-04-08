import React from "react";
import classes from "./TodoList.module.css";
import Todo from "../models/todo";

// use the a custom type to specifyy the prop type]
const TodoList: React.FC<{
  text: string;
  deleteTodo: (id: string) => void;
  todo: Todo;
}> = (prop) => {
  const handleDelete = (id: any) => {
    prop.deleteTodo(id);
  };
  return (
    <li className={classes.item} onClick={() => handleDelete(prop.todo.id)}>
      {prop.text}
    </li>
  );
};

export default TodoList;
